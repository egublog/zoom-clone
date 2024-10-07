'use client';

import { useState } from 'react';
import { useUser } from '@clerk/nextjs';
import { StreamCall, StreamTheme } from '@stream-io/video-react-sdk';
import { useParams } from 'next/navigation';
import { Loader } from 'lucide-react';

import { useGetCallById } from '@/hooks/useGetCallById';
import MeetingSetup from '@/components/MeetingSetup';
import MeetingRoom from '@/components/MeetingRoom';
/**
 * Meetingコンポーネント
 *
 * このコンポーネントは、特定のIDを持つ会議室を表示します。
 * URLパラメータから会議IDを取得し、表示します。
 *
 * @param params - URLから取得したパラメータ
 * - id: 表示する会議室のID
 */
const MeetingPage = () => {
  const { id } = useParams();
  const { isLoaded, user } = useUser();
  const { call, isCallLoading } = useGetCallById(id);
  const [isSetupComplete, setIsSetupComplete] = useState(false);

  if (!isLoaded || isCallLoading) return <Loader />;

  if (!call) return (
    <p className="text-center text-3xl font-bold text-white">
      Call Not Found
    </p>
  );

  return (
    <main className="h-screen w-full">
      <StreamCall call={call}>
        <StreamTheme>

          {!isSetupComplete ? (
            <MeetingSetup />
          ) : (
            <MeetingRoom />
          )}
        </StreamTheme>
      </StreamCall>
    </main>
  );
};

export default MeetingPage;
