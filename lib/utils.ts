import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * クラス名を結合し、最適化されたクラス名の文字列を返します。
 * @param inputs - 結合するクラス名のリスト
 * @returns 最適化されたクラス名の文字列
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
