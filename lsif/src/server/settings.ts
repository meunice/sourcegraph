import { readEnvInt } from '../shared/settings'

/**
 * Which port to run the LSIF server on. Defaults to 3186.
 */
export const HTTP_PORT = readEnvInt('HTTP_PORT', 3186)

/**
 * Where on the file system to store LSIF files.
 */
export const STORAGE_ROOT = process.env.LSIF_STORAGE_ROOT || 'lsif-storage'

/**
 * The interval (in seconds) to schedule the clean-old-jobs job.
 */
export const CLEAN_OLD_JOBS_INTERVAL = readEnvInt('CLEAN_OLD_JOBS_INTERVAL', 60 * 60 * 8)

/**
 * The default number of remote dumps to open when performing a global find-reference operation.
 */
export const DEFAULT_REFERENCES_NUM_REMOTE_DUMPS = readEnvInt('DEFAULT_REFERENCES_NUM_REMOTE_DUMPS', 10)

/**
 * The interval (in seconds) to schedule the clean-failed-jobs job.
 */
export const CLEAN_FAILED_JOBS_INTERVAL = readEnvInt('CLEAN_FAILED_JOBS_INTERVAL', 60 * 60 * 8)

/**
 * The default page size for the job endpoints.
 */
export const DEFAULT_JOB_PAGE_SIZE = readEnvInt('DEFAULT_JOB_PAGE_SIZE', 50)

/**
 * The default page size for the upload endpoints.
 */
export const DEFAULT_UPLOAD_PAGE_SIZE = readEnvInt('DEFAULT_UPLOAD_PAGE_SIZE', 50)

/**
 * The default page size for the dumps endpoint.
 */
export const DEFAULT_DUMP_PAGE_SIZE = readEnvInt('DEFAULT_DUMP_PAGE_SIZE', 50)

/**
 * The number of SQLite connections that can be opened at once. This
 * value may be exceeded for a short period if many handles are held
 * at once.
 */
export const CONNECTION_CACHE_CAPACITY = readEnvInt('CONNECTION_CACHE_CAPACITY', 100)

/**
 * The maximum number of documents that can be held in memory at once.
 */
export const DOCUMENT_CACHE_CAPACITY = readEnvInt('DOCUMENT_CACHE_CAPACITY', 1024 * 1024 * 1024)

/**
 * The maximum number of result chunks that can be held in memory at once.
 */
export const RESULT_CHUNK_CACHE_CAPACITY = readEnvInt('RESULT_CHUNK_CACHE_CAPACITY', 1024 * 1024 * 1024)
