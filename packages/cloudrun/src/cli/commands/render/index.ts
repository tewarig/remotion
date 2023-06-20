import {CliInternals} from '@remotion/cli';
import {renderMediaOnCloudrun} from '../../../api/render-media-on-cloudrun';
import type {CloudrunCodec} from '../../../shared/validate-gcp-codec';
// import {validateMaxRetries} from '../../../shared/validate-retries';
import {ConfigInternals} from '@remotion/cli/config';
import {RenderInternals} from '@remotion/renderer';
import {downloadFile} from '../../../api/download-file';
import {validateServeUrl} from '../../../shared/validate-serveurl';
import {parsedCloudrunCli} from '../../args';
import {Log} from '../../log';
import {renderArgsCheck} from './helpers/renderArgsCheck';

export const RENDER_COMMAND = 'render';

export const renderCommand = async (args: string[], remotionRoot: string) => {
	const {
		serveUrl,
		cloudRunUrl,
		outName,
		forceBucketName,
		downloadName,
		privacy,
		region,
	} = await renderArgsCheck(RENDER_COMMAND, args);

	const {codec, reason: codecReason} = CliInternals.getFinalOutputCodec({
		cliFlag: CliInternals.parsedCli.codec,
		downloadName,
		outName: outName ?? null,
		configFile: ConfigInternals.getOutputCodecOrUndefined() ?? null,
		uiCodec: null,
	});

	const imageFormat = parsedCloudrunCli['image-format'];

	const audioCodec = parsedCloudrunCli['audio-codec'];

	const {
		chromiumOptions,
		crf,
		envVariables,
		frameRange,
		inputProps,
		logLevel,
		puppeteerTimeout,
		pixelFormat,
		proResProfile,
		jpegQuality,
		scale,
		everyNthFrame,
		numberOfGifLoops,
		muted,
		audioBitrate,
		videoBitrate,
		height,
		width,
		browserExecutable,
		port,
		enforceAudioTrack,
	} = await CliInternals.getCliOptions({
		type: 'series',
		isLambda: true,
		remotionRoot,
	});

	const verbose = RenderInternals.isEqualOrBelowLogLevel(logLevel, 'verbose');
	let composition: string = args[1];

	if (!composition) {
		Log.info('No compositions passed. Fetching compositions...');

		validateServeUrl(serveUrl);

		const server = RenderInternals.prepareServer({
			concurrency: 1,
			indent: false,
			port,
			remotionRoot,
			verbose,
			webpackConfigOrServeUrl: serveUrl,
		});

		const {compositionId} =
			await CliInternals.getCompositionWithDimensionOverride({
				args,
				compositionIdFromUi: null,
				browserExecutable,
				chromiumOptions,
				envVariables,
				height,
				indent: false,
				inputProps,
				port,
				puppeteerInstance: undefined,
				serveUrlOrWebpackUrl: serveUrl,
				timeoutInMilliseconds: puppeteerTimeout,
				verbose: RenderInternals.isEqualOrBelowLogLevel(logLevel, 'verbose'),
				width,
				server: await server,
			});
		composition = compositionId;
	}

	// Todo: Check cloudRunUrl is valid, as the error message is obtuse
	CliInternals.Log.info(
		CliInternals.chalk.gray(
			`
Cloud Run Service URL = ${cloudRunUrl}
Region = ${region}
Type = media
Composition = ${composition}
Codec = ${codec}
Output Bucket = ${forceBucketName}
Output File = ${outName ?? 'out.mp4'}
Output File Privacy = ${privacy}
${downloadName ? `		Downloaded File = ${downloadName}` : ''}
			`.trim()
		)
	);
	Log.info();

	const renderStart = Date.now();
	const progressBar = CliInternals.createOverwriteableCliOutput({
		quiet: CliInternals.quietFlagProvided(),
		cancelSignal: null,
		updatesDontOverwrite: false,
		indent: false,
	});

	const renderProgress: {
		progress: number;
		doneIn: number | null;
	} = {
		doneIn: null,
		progress: 0,
	};
	const updateProgress = () => {
		progressBar.update(
			[
				`Rendering on Cloud Run: `,
				CliInternals.makeProgressBar(renderProgress.progress),
				`${renderProgress.doneIn === null ? 'Rendering' : 'Rendered'}`,
				renderProgress.doneIn === null
					? `${Math.round(renderProgress.progress * 100)}%`
					: CliInternals.chalk.gray(`${renderProgress.doneIn}ms`),
			].join(' '),
			false
		);
	};

	const updateRenderProgress = (progress: number) => {
		renderProgress.progress = progress;
		updateProgress();
	};

	const res = await renderMediaOnCloudrun({
		cloudRunUrl,
		serveUrl,
		region,
		inputProps,
		codec: codec as CloudrunCodec,
		imageFormat,
		crf: crf ?? undefined,
		envVariables,
		pixelFormat,
		proResProfile,
		jpegQuality,
		composition,
		privacy,
		frameRange: frameRange ?? undefined,
		outName,
		chromiumOptions,
		scale,
		numberOfGifLoops,
		everyNthFrame,
		muted,
		audioBitrate,
		videoBitrate,
		forceHeight: height,
		forceWidth: width,
		audioCodec,
		forceBucketName,
		updateRenderProgress,
		logLevel: ConfigInternals.Logging.getLogLevel(),
		// Special case: Should not use default local concurrency, or from
		// config file, just when explicitly set
		concurrency: CliInternals.parsedCli.concurrency ?? null,
		delayRenderTimeoutInMilliseconds: puppeteerTimeout,
		dumpBrowserLogs: verbose,
		enforceAudioTrack,
		preferLossless: false,
	});
	renderProgress.doneIn = Date.now() - renderStart;
	updateProgress();

	Log.info(`
		
		`);
	Log.info(
		CliInternals.chalk.blueBright(
			`
${res.publicUrl ? `Public URL = ${decodeURIComponent(res.publicUrl)}` : ``}
Cloud Storage Uri = ${res.cloudStorageUri}
Size (KB) = ${Math.round(Number(res.size) / 1000)}
Bucket Name = ${res.bucketName}
Privacy = ${res.privacy}
Render ID = ${res.renderId}
Codec = ${codec} (${codecReason})
      `.trim()
		)
	);

	if (downloadName) {
		Log.info('');
		Log.info('downloading file...');

		const destination = await downloadFile({
			bucketName: res.bucketName,
			gsutilURI: res.cloudStorageUri,
			downloadName,
		});

		Log.info(
			CliInternals.chalk.blueBright(`Downloaded file to ${destination}!`)
		);
	}
};
