import { rest } from "msw";

export const usersHandler = [
  // rest.post(`${process.env.REACT_APP_BASE_URL}${PATH.USERS_}/login`, (req, res, ctx) => {
  //   return res(
  //     ctx.status(200),
  //     ctx.json({
  //       status: 200,
  //       success: true,
  //       message: "로그인 성공",
  //       data: {
  //         _id: "example id",
  //         accessToken: "example token",
  //       },
  //     }),
  //   );
  // }),
  // rest.get(`${process.env.REACT_APP_BASE_URL}${PATH.USERS_}`, (req, res, ctx) => {
  //   return res(
  //     ctx.status(200),
  //     ctx.json({
  //       data: {
  //         name: "example name",
  //         nickname: "example nickname",
  //         email: "example email",
  //         profileImageUrl: "example profile_image",
  //       },
  //     }),
  //   );
  // }),
];
