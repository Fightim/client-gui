import { rest } from "msw";

export const instancesHandler = [
  rest.post(`${import.meta.env.VITE_BASE_URL}/instances`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        status: 200,
        success: true,
        message: "로그인 성공",
        data: {
          options: {
            name: "아이디",
          },
          informations: {
            id: "아이디",
            type: "t2.micro",
            os: "UBUNTU",
            tier: "WEBSERVER",
            publicIp: "아이피",
            privateIp: "아이피",
            securityGroup: ["랄", "랄랄"],
            storageVolume: "볼륨",
            storageType: "SSD",
          },
        },
      }),
    );
  }),
  rest.get(`${import.meta.env.VITE_BASE_URL}/instances/*`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        data: {
          options: {
            name: "아이디",
          },
          informations: {
            id: "아이디",
            type: "t2.micro",
            os: "UBUNTU",
            tier: "WEBSERVER",
            publicIp: "아이피",
            privateIp: "아이피",
            securityGroup: ["랄", "랄랄"],
            storageVolume: "볼륨",
            storageType: "SSD",
          },
        },
      }),
    );
  }),
];
