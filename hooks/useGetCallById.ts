import { useEffect, useState } from 'react';
import { Call, useStreamVideoClient } from '@stream-io/video-react-sdk';

/**
 * useGetCallByIdフック
 *
 * このフックは、指定されたIDに基づいてビデオ通話を取得します。
 * 通話がロードされるまでの間、ローディング状態を管理します。
 *
 * @param id - 取得する通話のIDまたはIDの配列
 * @returns {Object} - 取得した通話オブジェクトとローディング状態を含むオブジェクト
 * - call: 取得した通話オブジェクト
 * - isCallLoading: 通話がロード中かどうかを示すフラグ
 */
export const useGetCallById = (id: string | string[]) => {
	const [call, setCall] = useState<Call>();
	const [isCallLoading, setIsCallLoading] = useState(true);

	const client = useStreamVideoClient();

	useEffect(() => {
		if (!client) return;

		const loadCall = async () => {
			try {
				// https://getstream.io/video/docs/react/guides/querying-calls/#filters
				const { calls } = await client.queryCalls({
					filter_conditions: { id },
				});

				if (calls.length > 0) setCall(calls[0]);

				setIsCallLoading(false);
			} catch (error) {
				console.error(error);
				setIsCallLoading(false);
			}
		};

		loadCall();
	}, [client, id]);

	return { call, isCallLoading };
};
