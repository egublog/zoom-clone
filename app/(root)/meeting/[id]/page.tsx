import React from 'react'

/**
 * Meetingコンポーネント
 *
 * このコンポーネントは、特定のIDを持つ会議室を表示します。
 * URLパラメータから会議IDを取得し、表示します。
 *
 * @param params - URLから取得したパラメータ
 * - id: 表示する会議室のID
 */
const Meeting = ({ params }: { params: { id: string } }) => {
  return (
    <div>Meeting Room: #{params.id}</div>
  )
}

export default Meeting
