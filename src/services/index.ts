import Axios, { AxiosResponse } from 'axios';

const SubmitInvitationUrl =
  'https://l94wc2001h.execute-api.ap-southeast-2.amazonaws.com/prod/fake-auth';

export const DefaultServiceErrorMessage =
  'something bad happened. please try later';

export type InvitationRequest = {
  email: string;
  name: string;
};

type ErrorResponse = {
  response?: {
    data?: {
      errorMessage?: string;
      [x: string]: any;
    };
  };
};

// email usedemail@airwallex.com for error
export function submitInvitation(reqData: InvitationRequest): Promise<any> {
  return Axios.post(SubmitInvitationUrl, reqData).catch((e: ErrorResponse) => {
    const data = e?.response?.data || {};
    const errorMessage: string =
      data.errorMessage || DefaultServiceErrorMessage;
    throw {
      ...data,
      errorMessage,
    };
  });
}
