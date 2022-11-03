import { rest } from "msw";

export const rdsHandler = [
  rest.post(`${process.env.REACT_APP_BASE_URL}/rds`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        status: 200,
        success: true,
        message: "로그인 성공",
        data: {
          options: {
            name: "이름",
            masterUserName: "유저이름",
          },
          informations: {
            endPoint: "엔드포인트",
            port: 2497,
            storage: "스토리지",
          },
        },
      }),
    );
  }),
  rest.get(`${process.env.REACT_APP_BASE_URL}/rds/*`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        data: {
          options: {
            name: "이름",
            masterUserName: "유저이름",
          },
          informations: {
            endPoint: "엔드포인트",
            port: 2497,
            storage: "스토리지",
          },
        },
      }),
    );
  }),
];
