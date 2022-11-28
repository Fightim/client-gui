import { rest } from "msw";
import { PATH } from "../../api/instances";

export const instancesHandler = [
  rest.get(`${import.meta.env.VITE_BASE_URL}${PATH.instances}`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          "options": {
            "name": "string"
          },
          "informations": {
            "id": "string11",
            "type": "t2.micro",
            "os": "CENTOS",
            "tier": "WEBSERVER",
            "publicIp": "string",
            "privateIp": "string",
            "securityGroup": [
              "string"
            ],
            "storageType": "SSD"
          }
        },
        {
          "options": {
            "name": "string"
          },
          "informations": {
            "id": "string22",
            "type": "t2.micro",
            "os": "UBUNTU",
            "tier": "WEBSERVER",
            "publicIp": "string",
            "privateIp": "string",
            "securityGroup": [
              "string"
            ],
            "storageType": "SSD"
          }
        },
        {
          "options": {
            "name": "string"
          },
          "informations": {
            "id": "string33",
            "type": "t2.micro",
            "os": "CENTOS",
            "tier": "WAS",
            "publicIp": "string",
            "privateIp": "string",
            "securityGroup": [
              "string"
            ],
            "storageType": "SSD"
          }
        },
        {
          "options": {
            "name": "string"
          },
          "informations": {
            "id": "string44",
            "type": "t2.micro",
            "os": "UBUNTU",
            "tier": "WAS",
            "publicIp": "string",
            "privateIp": "string",
            "securityGroup": [
              "string"
            ],
            "storageType": "SSD"
          }
        }
      ],
      ),
    );
  }),
  rest.post(`${import.meta.env.VITE_BASE_URL}${PATH.instances}`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        status: 200,
        success: true,
        message: "로그인 성공",
        data: [{
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
            storageType: "SSD",
          },
        }, {
          options: {
            name: "아이디22",
          },
          informations: {
            id: "아이디2",
            type: "t2.micro",
            os: "UBUNTU",
            tier: "WEBSERVER",
            publicIp: "아이피",
            privateIp: "아이피",
            securityGroup: ["랄", "랄랄"],
            storageType: "SSD",
          },
        }],
      }),
    );
  }),
  rest.get(`${import.meta.env.VITE_BASE_URL}${PATH.instances}/*`, (req, res, ctx) => {
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
            publicIp: null,
            privateIp: "아이피",
            securityGroup: ["랄", "랄랄"],
            storageType: "SSD",
          },
        },
      }),
    );
  }),
];
