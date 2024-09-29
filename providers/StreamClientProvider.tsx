import {
  StreamCall,
  StreamVideo,
  StreamVideoClient,
  User,
} from '@stream-io/video-react-sdk';

const apiKey = 'your-api-key';
const userId = 'user-id';
const token = 'authentication-token';
const user: User = { id: userId };

const client = new StreamVideoClient({ apiKey, user, token });
const call = client.call('default', 'my-first-call');
call.join({ create: true });

/**
 * MyAppコンポーネント
 *
 * このコンポーネントは、StreamVideoとStreamCallを使用してビデオストリーミング機能を提供します。
 * `client`と`call`のプロパティをそれぞれのコンポーネントに渡します。
 */
export const MyApp = () => {
  return (
    <StreamVideo client={client}>
      <StreamCall call={call}>

      </StreamCall>
    </StreamVideo>
  );
};
