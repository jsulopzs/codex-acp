import type {SessionId} from "@agentclientprotocol/sdk/unstable";

export const ASYNC_TASK_STOP_METHOD = "_session/async_task/stop";
export const ASYNC_TASK_OUTPUT_METHOD = "_session/async_task/output";

export type AsyncTaskStopRequest = {
    sessionId: SessionId;
    asyncTaskId: string;
};

export type AsyncTaskStopResponse = {
    stopped: boolean;
};

export type AsyncTaskStopExtRequest = {
    method: typeof ASYNC_TASK_STOP_METHOD;
    params: AsyncTaskStopRequest;
};

export type AsyncTaskOutputRequest = AsyncTaskStopRequest;
export type AsyncTaskOutputResponse = {output: string};
export type AsyncTaskOutputExtRequest = {method: typeof ASYNC_TASK_OUTPUT_METHOD; params: AsyncTaskOutputRequest};
