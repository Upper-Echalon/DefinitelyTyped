/// <reference types="node" />

export interface Paths extends NodeJS.ReadWriteStream {
    paths: string[];
}

export interface PathsStatic {
    /**
     * Use the file paths from a gulp pipeline in vanilla node module
     * @param callback The optionally supplied callback will get a file path for every file and is expected
     * to call the callback when done. An array of the file paths so far is available as a paths property
     * on the stream.
     */
    (callback?: Callback): Paths;
}

export interface Callback {
    (path: string): any;
}

declare const paths: PathsStatic;

export default paths;
