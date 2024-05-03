import {FLOW_BODY, FLOW_HEAD, FLOW_TAIL} from "./constants";
import {log, underline} from "./logger";

export const section = async (title: string, task: () => unknown | Promise<unknown>, data?: Record<string, unknown> | boolean) => {
  if (data === false) return;
  if (typeof data === 'object' && !Object.values(data).some(Boolean)) return;

  log([false], FLOW_HEAD);
  log([false], `${FLOW_BODY} `, underline(title));
  log([false], FLOW_TAIL);

  await task();
}
