"use client";
import { ReactNode } from "react";
import { Dialog, DialogContent } from "./ui/dialog";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import Image from "next/image";

interface MeetingModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  className?: string;
  children?: ReactNode;
  handleClick?: () => void;
  buttonText?: string;
  instantMeeting?: boolean;
  image?: string;
  buttonClassName?: string;
  buttonIcon?: string;
}

/**
 * MeetingModalコンポーネント
 *
 * このコンポーネントは、会議の詳細を表示するモーダルウィンドウを提供します。
 * モーダルは、タイトル、オプションの画像、カスタムボタンを含むことができます。
 *
 * @param isOpen - モーダルが開いているかどうかを示すフラグ
 * @param onClose - モーダルを閉じるためのコールバック関数
 * @param title - モーダルのタイトル
 * @param className - タイトルに適用する追加のクラス名
 * @param children - モーダル内に表示する追加のコンテンツ
 * @param handleClick - ボタンがクリックされたときのコールバック関数
 * @param buttonText - ボタンに表示するテキスト
 * @param instantMeeting - 即時会議を示すフラグ（使用されている場合）
 * @param image - モーダルに表示する画像のURL
 * @param buttonClassName - ボタンに適用する追加のクラス名
 * @param buttonIcon - ボタンに表示するアイコンのURL
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
