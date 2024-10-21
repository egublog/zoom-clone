"use client";

import Image from "next/image";

import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { avatarImages } from "@/constants";
import { useToast } from "@/hooks/use-toast";


interface MeetingCardProps {
  /** カードのタイトル */
  title: string;
  /** 会議の日付 */
  date: string;
  /** アイコンのURL */
  icon: string;
  /** 過去の会議かどうかを示すフラグ */
  isPreviousMeeting?: boolean;
  /** ボタンに表示するアイコンのURL */
  buttonIcon1?: string;
  /** ボタンに表示するテキスト */
  buttonText?: string;
  /** ボタンがクリックされたときのコールバック関数 */
  handleClick: () => void;
  /** クリップボードにコピーするリンク */
  link: string;
}

/**
 * MeetingCardコンポーネント
 *
 * このコンポーネントは、会議の詳細を表示するカードを提供します。
 * 会議のタイトル、日付、アイコン、参加者のアバター、およびアクションボタンを含みます。
 *
 * @param param0 - MeetingCardPropsオブジェクト
 * @returns JSX.Element - 会議カードを表示する要素
 */
const MeetingCard = ({
  icon,
  title,
  date,
  isPreviousMeeting,
  buttonIcon1,
  handleClick,
  link,
  buttonText,
}: MeetingCardProps) => {
  const { toast } = useToast();

  return (
    <section className="flex min-h-[258px] w-full flex-col justify-between rounded-[14px] bg-dark-1 px-5 py-8 xl:max-w-[568px]">
      <article className="flex flex-col gap-5">
        <Image src={icon} alt="upcoming" width={28} height={28} />
        <div className="flex justify-between">
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-bold">{title}</h1>
            <p className="text-base font-normal">{date}</p>
          </div>
        </div>
      </article>
      <article className={cn("flex justify-center relative", {})}>
        <div className="relative flex w-full max-sm:hidden">
          {avatarImages.map((img, index) => (
            <Image
              key={index}
              src={img}
              alt="attendees"
              width={40}
              height={40}
              className={cn("rounded-full", { absolute: index > 0 })}
              style={{ top: 0, left: index * 28 }}
            />
          ))}
          <div className="flex-center absolute left-[136px] size-10 rounded-full border-[5px] border-dark-3 bg-dark-4">
            +5
          </div>
        </div>
        {!isPreviousMeeting && (
          <div className="flex gap-2">
            <Button onClick={handleClick} className="rounded bg-blue-1 px-6">
              {buttonIcon1 && (
                <Image src={buttonIcon1} alt="feature" width={20} height={20} />
              )}
              &nbsp; {buttonText}
            </Button>
            <Button
              onClick={() => {
                navigator.clipboard.writeText(link);
                toast({
                  title: "Link Copied",
                });
              }}
              className="bg-dark-4 px-6"
            >
              <Image
                src="/icons/copy.svg"
                alt="feature"
                width={20}
                height={20}
              />
              &nbsp; Copy Link
            </Button>
          </div>
        )}
      </article>
    </section>
  );
};

export default MeetingCard;
