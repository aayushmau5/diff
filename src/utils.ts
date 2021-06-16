import { readFileSync } from 'fs';
import { resolve } from 'path';
import { URL } from 'url';

/**
 * Checks if the argument is URL or not
 * @param {String} path Path to document
 * @returns {Boolean} Whether the given path is URL or not
 */
export function isUrl(path: string): boolean {
  if (path.startsWith('http')) {
    new URL(path);
    return true;
  }
  return false;
}

/**
 * Synchronously reads the entire content of passed document file
 * @param {String} path Path to document
 * @returns {String} The entire content of a file
 */
export function readDocument(path: string): string {
  const resolvedPath = resolve(path);
  return readFileSync(resolvedPath, 'utf-8');
}