"use client";
import { ReactNode } from "react";
import { Dialog, DialogContent } from "./ui/dialog";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import Image from "next/image";

interface MeetingModalProps {
  /** モーダルが開いているかどうかを示すフラグ */
  isOpen: boolean;
  /** モーダルを閉じるためのコールバック関数 */
  onClose: () => void;
  /** モーダルのタイトル */
  title: string;
  /** タイトルに適用する追加のクラス名 */
  className?: string;
  /** モーダル内に表示する追加のコンテンツ */
  children?: ReactNode;
  /** ボタンがクリックされたときのコールバック関数 */
  handleClick?: () => void;
  /** ボタンに表示するテキスト */
  buttonText?: string;
  /** 即時会議を示すフラグ（使用されている場合） */
  instantMeeting?: boolean;
  /** モーダルに表示する画像のURL */
  image?: string;
  /** ボタンに適用する追加のクラス名 */
  buttonClassName?: string;
  /** ボタンに表示するアイコンのURL */
  buttonIcon?: string;
}

/**
 * MeetingModalコンポーネント
 *
 * このコンポーネントは、会議の詳細を表示するモーダルウィンドウを提供します。
 * モーダルは、タイトル、オプションの画像、カスタムボタンを含むことができます。
 */
const MeetingModal = ({
  isOpen,
  onClose,
  title,
  className,
  children,
  handleClick,
  buttonText,
  instantMeeting,
  image,
  buttonClassName,
  buttonIcon,
}: MeetingModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="flex w-full max-w-[520px] flex-col gap-6 border-none bg-dark-1 px-6 py-9 text-white">
        <div className="flex flex-col gap-6">
          {image && (
            <div className="flex justify-center">
              <Image src={image} alt="checked" width={72} height={72} />
            </div>
          )}
          <h1 className={cn("text-3xl font-bold leading-[42px]", className)}>
            {title}
          </h1>
          {children}
          <Button
            className={
              "bg-blue-1 focus-visible:ring-0 focus-visible:ring-offset-0"
            }
            onClick={handleClick}
          >
            {buttonIcon && (
              <Image
                src={buttonIcon}
                alt="button icon"
                width={13}
                height={13}
              />
            )}{" "}
            &nbsp;
            {buttonText || "Schedule Meeting"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MeetingModal;
