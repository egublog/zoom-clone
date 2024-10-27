/**
 * サイドバーのリンク情報を定義します。
 * 各リンクはラベル、ルート、アイコンのURLを持ちます。
 */
export const sidebarLinks = [
	{
		label: 'Home',
		route: '/',
		imgUrl: '/icons/Home.svg',
	},
	{
		label: 'Upcoming',
		route: '/upcoming',
		imgUrl: '/icons/upcoming.svg',
	},
	{
		label: 'Previous',
		route: '/previous',
		imgUrl: '/icons/previous.svg',
	},
	{
		label: ' Recordings',
		route: '/recordings',
		imgUrl: '/icons/Video.svg',
	},
	{
		label: 'Personal Room',
		route: '/personal-room',
		imgUrl: '/icons/add-personal.svg',
	},
];

/**
 * アバター画像のパスを格納した配列
 *
 * この配列は、ユーザーのプロフィール画像として使用される
 * アバター画像のパスを提供します。
 */
export const avatarImages = [
  '/images/avatar-1.jpeg',
  '/images/avatar-2.jpeg',
  '/images/avatar-3.png',
  '/images/avatar-4.png',
  '/images/avatar-5.png',
];
