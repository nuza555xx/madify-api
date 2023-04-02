export const Errors = {
  REQUEST_URL_NOT_FOUND: {
    statusCode: 404,
    code: '1000',
    message: 'The requested URL was not found.',
  },
  MISSING_AUTHORIZATION_HEADERS: {
    statusCode: 401,
    code: '1001',
    message: 'Missing Authorization header.',
  },
  MISSING_METADATA_HEADERS: {
    statusCode: 400,
    code: '1002',
    message: 'Missing metadata header.',
  },
  INVALID_ACCESS_TOKEN: {
    statusCode: 401,
    code: '1003',
    message: 'Invalid access token or expire.',
  },
  INVALID_REFRESH_TOKEN: {
    statusCode: 401,
    code: '1004',
    message: 'Invalid refresh token or expire.',
  },
  FORBIDDEN: {
    statusCode: 403,
    code: '1005',
    message: 'Can not access the data. Please try again.',
  },

  RATE_LIMIT_REQUEST: {
    statusCode: 429,
    code: '1006',
    message: `API rate limit exceeded `,
  },
  INVALID_EMAIL_OR_PASSWORD: {
    statusCode: 400,
    code: '1007',
    message: 'Incorrect email address or password. Please try again.',
  },
  INVALID_EMAIL: {
    statusCode: 400,
    code: '1008',
    message: 'Incorrect email address. Please try again.',
  },
  INVALID_PHONE_NUMBER: {
    statusCode: 400,
    code: '1009',
    message: 'Invalid phone number. Please try again.',
  },
  PAYLOAD_CHANNEL_MISMATCH: {
    statusCode: 400,
    code: '1010',
    message: 'Payload and Channel do not match.',
  },
  EMAIL_OR_PHONE_NOT_FOUND: {
    statusCode: 400,
    code: '1011',
    message: 'Sorry, Something went wrong. Please try again.',
  },
  PLEASE_TRY_AGAIN: {
    statusCode: 400,
    code: '1012',
    message: 'Please try again in 5 minutes.',
  },
  INVALID_OTP: {
    statusCode: 400,
    code: '1013',
    message: 'Invalid OTP code. Please try again.',
  },
  EXPIRED_OTP: {
    statusCode: 400,
    code: '1014',
    message:
      'The OTP has been requested past the time limit, please press the "Get OTP" button to request a new code again.',
  },
  INVALID_PASSWORD: {
    statusCode: 400,
    code: '1015',
    message: 'Incorrect password. Please try again.',
  },
  EMAIL_IS_EXIST: {
    statusCode: 400,
    code: '1016',
    message: 'This email already exists. Please try again.',
  },
  DUPLICATE_EMAIL: {
    statusCode: 400,
    code: '1017',
    message: 'This email is already in Madify.',
  },
  SOMETHING_WRONG: {
    statusCode: 400,
    code: '1018',
    message: 'Sorry, Something went wrong. Please try again.',
  },
  NOT_FOUND_DATA: {
    statusCode: 400,
    code: '1019',
    message: 'Not fount data. Please try again.',
  },
  NOT_MATCH_PASSWORD: {
    statusCode: 400,
    code: '1020',
    message: 'Password is not matched. Please try again.',
  },
};
