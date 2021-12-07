import * as express from 'express';

export async function expressAuthentication(
  request: express.Request,
  securityName: string,
  scope?: string[],
): Promise<{ id: string }> {
  /**
   * 認証を行なって、ユーザ情報などを返す
   */
  return { id: 'ok' };
}
