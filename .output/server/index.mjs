globalThis.__nitro_main__ = import.meta.url;
import { a as FastResponse, n as HTTPError, r as defineLazyEventHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { t as HookableCore } from "./_libs/hookable.mjs";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/assets/building-2-CuWRLcqr.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"174-FZ1JhLnmPJB66p0utJeQWPSr7Dc\"",
		"mtime": "2026-07-22T12:41:41.745Z",
		"size": 372,
		"path": "../public/assets/building-2-CuWRLcqr.js"
	},
	"/logo.png": {
		"type": "image/png",
		"etag": "\"41fee-7QFnM/oHUBDO0+SD6kQweDbKH0g\"",
		"mtime": "2026-07-20T13:07:10.448Z",
		"size": 270318,
		"path": "../public/logo.png"
	},
	"/robots.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"18-If/RcfnZcfP4uGbrV8oW3wdTxnY\"",
		"mtime": "2026-07-14T09:41:57.730Z",
		"size": 24,
		"path": "../public/robots.txt"
	},
	"/assets/chevron-right-CpEGabaD.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"77-92IqTez0lfH7HgBKWZP4fWYJphM\"",
		"mtime": "2026-07-22T12:41:41.748Z",
		"size": 119,
		"path": "../public/assets/chevron-right-CpEGabaD.js"
	},
	"/assets/book-open-cxR_1q2y.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"10c-A+2v4nw2y0hFDEEegUgCY8xzEWg\"",
		"mtime": "2026-07-22T12:41:41.745Z",
		"size": 268,
		"path": "../public/assets/book-open-cxR_1q2y.js"
	},
	"/assets/external-link-BZc27LJd.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"f0-DVAUcw8lYDqFdQlNtw5lFwCIibo\"",
		"mtime": "2026-07-22T12:41:41.749Z",
		"size": 240,
		"path": "../public/assets/external-link-BZc27LJd.js"
	},
	"/assets/file-text-BXRg8t7V.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"229-4imAE24DJWg4Z9QN1ND6ASj9S5U\"",
		"mtime": "2026-07-22T12:41:41.750Z",
		"size": 553,
		"path": "../public/assets/file-text-BXRg8t7V.js"
	},
	"/assets/PageHero-BdEbhe-m.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"45f-BBsYDAhNQqN7txqfkIQbPfkgz9E\"",
		"mtime": "2026-07-22T12:41:41.728Z",
		"size": 1119,
		"path": "../public/assets/PageHero-BdEbhe-m.js"
	},
	"/assets/routes-D4WlylEB.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"7a33-lnO+sfjJpDvodRS90QugN0ICqaY\"",
		"mtime": "2026-07-22T12:41:41.751Z",
		"size": 31283,
		"path": "../public/assets/routes-D4WlylEB.js"
	},
	"/assets/payment-qr-Bi-ypoTr.jpeg": {
		"type": "image/jpeg",
		"etag": "\"109f0-5a+rSnANdMdvFRvw/M7qDbBghxM\"",
		"mtime": "2026-07-22T12:41:41.751Z",
		"size": 68080,
		"path": "../public/assets/payment-qr-Bi-ypoTr.jpeg"
	},
	"/assets/useStore-CsI6HBwk.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6b93-/94wXA959dCiHhQ17fo/1aIZiOs\"",
		"mtime": "2026-07-22T12:41:41.751Z",
		"size": 27539,
		"path": "../public/assets/useStore-CsI6HBwk.js"
	},
	"/assets/_inner-CZpL247J.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"10d-qwryUoPK4K2b3puOf46m3coqRFc\"",
		"mtime": "2026-07-22T12:41:41.728Z",
		"size": 269,
		"path": "../public/assets/_inner-CZpL247J.js"
	},
	"/assets/_inner.about-CjMLZWV9.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"183e-Um0U53oG3gFWrpT1eoDGLIobQOk\"",
		"mtime": "2026-07-22T12:41:41.733Z",
		"size": 6206,
		"path": "../public/assets/_inner.about-CjMLZWV9.js"
	},
	"/assets/_inner.author-guidelines-D_e5c4e_.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"cc5-sQNB6QYSf4sFr8D6cibRTgoDHGE\"",
		"mtime": "2026-07-22T12:41:41.733Z",
		"size": 3269,
		"path": "../public/assets/_inner.author-guidelines-D_e5c4e_.js"
	},
	"/assets/_inner.committee-D_Ej4Gwo.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4e7-kIsnX+mdY/7J0d5L794fwj3SVCk\"",
		"mtime": "2026-07-22T12:41:41.736Z",
		"size": 1255,
		"path": "../public/assets/_inner.committee-D_Ej4Gwo.js"
	},
	"/assets/_inner.contact-C8zzwSdH.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"13d4-/lRpzGeTsEXJdrRNE01onxMKNjU\"",
		"mtime": "2026-07-22T12:41:41.736Z",
		"size": 5076,
		"path": "../public/assets/_inner.contact-C8zzwSdH.js"
	},
	"/assets/styles-D6DQJ1OW.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"144cc-o2Oq3zJ2RsYKHOyco89YF+sVkRA\"",
		"mtime": "2026-07-22T12:41:41.751Z",
		"size": 83148,
		"path": "../public/assets/styles-D6DQJ1OW.css"
	},
	"/assets/_inner.call-for-papers-_UmdfOp3.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"777-xI27f1jOHj1TddYXvlm1NYu/4NI\"",
		"mtime": "2026-07-22T12:41:41.735Z",
		"size": 1911,
		"path": "../public/assets/_inner.call-for-papers-_UmdfOp3.js"
	},
	"/assets/_inner.important-dates-Rkbcp7Kc.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"718-CU6UeFgor4wPEmh6Ii2HMh5qLs4\"",
		"mtime": "2026-07-22T12:41:41.736Z",
		"size": 1816,
		"path": "../public/assets/_inner.important-dates-Rkbcp7Kc.js"
	},
	"/assets/_inner.registration-CSCuwtmG.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1773-Av+en7ghssPmGftiZO5nHd//YDE\"",
		"mtime": "2026-07-22T12:41:41.742Z",
		"size": 6003,
		"path": "../public/assets/_inner.registration-CSCuwtmG.js"
	},
	"/assets/_inner.program-DVG3-iD_.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"57c-jvPd7RjFry3JhZB6Ll4T7jmMCSc\"",
		"mtime": "2026-07-22T12:41:41.736Z",
		"size": 1404,
		"path": "../public/assets/_inner.program-DVG3-iD_.js"
	},
	"/assets/_inner.submission-BxwqH45j.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"7c2-8jZzWXUcVzyFmDzdgtJUEGwrxQU\"",
		"mtime": "2026-07-22T12:41:41.742Z",
		"size": 1986,
		"path": "../public/assets/_inner.submission-BxwqH45j.js"
	},
	"/assets/_inner.publication-BGws-khz.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"62a-bCuzh3qjhhEv+1g/KwTgIOrq8Y4\"",
		"mtime": "2026-07-22T12:41:41.736Z",
		"size": 1578,
		"path": "../public/assets/_inner.publication-BGws-khz.js"
	},
	"/assets/_inner.tracks-CD55odxc.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"811-YEVZ0Jj2jyvl9UeTo47jel66Z8g\"",
		"mtime": "2026-07-22T12:41:41.742Z",
		"size": 2065,
		"path": "../public/assets/_inner.tracks-CD55odxc.js"
	},
	"/assets/index-CB5suAL6.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"53a1d-Ert441p85YFRYNG6R1PsTHOPfdk\"",
		"mtime": "2026-07-22T12:41:41.728Z",
		"size": 342557,
		"path": "../public/assets/index-CB5suAL6.js"
	},
	"/assets/_inner.venue-BdKDOFGS.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"e3d-bXlOMOKUyEwFOCsHD0kv04sY5p0\"",
		"mtime": "2026-07-22T12:41:41.745Z",
		"size": 3645,
		"path": "../public/assets/_inner.venue-BdKDOFGS.js"
	},
	"/speaker/desktop.ini": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"5c-Knj/MUEOueai/t70ucu0x9PNWgc\"",
		"mtime": "2026-07-17T02:44:07.556Z",
		"size": 92,
		"path": "../public/speaker/desktop.ini"
	},
	"/assets/_inner.workshop-Du3NwZ4H.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5a9-yBzCWzDLdxJFlZt4nw3plQZYt5Q\"",
		"mtime": "2026-07-22T12:41:41.745Z",
		"size": 1449,
		"path": "../public/assets/_inner.workshop-Du3NwZ4H.js"
	},
	"/speaker/george.jpg": {
		"type": "image/jpeg",
		"etag": "\"72b2-5qwnu3RAA2XYRB7Ks7azsmHHuVY\"",
		"mtime": "2026-07-17T03:12:25.261Z",
		"size": 29362,
		"path": "../public/speaker/george.jpg"
	},
	"/speaker/ihtiram.jpg": {
		"type": "image/jpeg",
		"etag": "\"4ddc-w6Ls9LmWGxyIaLK/iAnkSJw6b5w\"",
		"mtime": "2026-07-17T02:49:14.993Z",
		"size": 19932,
		"path": "../public/speaker/ihtiram.jpg"
	},
	"/template/temp.docx": {
		"type": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
		"etag": "\"8442-Ezn5HgLZGi7ZlIa8pkEVh4jC9Lw\"",
		"mtime": "2026-07-14T13:37:46.968Z",
		"size": 33858,
		"path": "../public/template/temp.docx"
	}
};
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_lxqDxE = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_lxqDxE
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
[].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new FastResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function useNitroHooks() {
	const nitroApp = useNitroApp();
	const hooks = nitroApp.hooks;
	if (hooks) return hooks;
	return nitroApp.hooks = new HookableCore();
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/_module-handler.mjs
function createHandler(hooks) {
	const nitroApp = useNitroApp();
	const nitroHooks = useNitroHooks();
	return {
		async fetch(request, env, context) {
			globalThis.__env__ = env;
			augmentReq(request, {
				env,
				context
			});
			const ctxExt = {};
			const url = new URL(request.url);
			if (hooks.fetch) {
				const res = await hooks.fetch(request, env, context, url, ctxExt);
				if (res) return res;
			}
			return await nitroApp.fetch(request);
		},
		scheduled(controller, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:scheduled", {
				controller,
				env,
				context
			}) || Promise.resolve());
		},
		email(message, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:email", {
				message,
				event: message,
				env,
				context
			}) || Promise.resolve());
		},
		queue(batch, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:queue", {
				batch,
				event: batch,
				env,
				context
			}) || Promise.resolve());
		},
		tail(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:tail", {
				traces,
				env,
				context
			}) || Promise.resolve());
		},
		trace(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:trace", {
				traces,
				env,
				context
			}) || Promise.resolve());
		}
	};
}
function augmentReq(cfReq, ctx) {
	const req = cfReq;
	req.ip = cfReq.headers.get("cf-connecting-ip") || void 0;
	req.runtime ??= { name: "cloudflare" };
	req.runtime.cloudflare = {
		...req.runtime.cloudflare,
		...ctx
	};
	req.waitUntil = ctx.context?.waitUntil.bind(ctx.context);
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/cloudflare-module.mjs
var cloudflare_module_default = createHandler({ fetch(cfRequest, env, context, url) {
	if (env.ASSETS && isPublicAssetURL(url.pathname)) return env.ASSETS.fetch(cfRequest);
} });
//#endregion
export { cloudflare_module_default as default };
