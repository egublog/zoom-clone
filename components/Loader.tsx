import Image from 'next/image';

/**
 * Loaderコンポーネント
 *
 * このコンポーネントは、ローディング中のインジケーターを表示します。
 * 画面全体に中央揃えでローディングアイコンを表示します。
 */
const Loader = () => {
  return (
    <div className="flex-center h-screen w-full">
      <Image
        src="/icons/loading-circle.svg"
        alt="Loading..."
        width={50}
        height={50}
      />
    </div>
  );
};

export default Loader;
