export const instanceIconType = {
  Ubuntu: "T2_UBUNTU",
  Centos: "T2_CENTOS",
  ALB: "ALB",
  RDS: "MYSQL",
} as const;

export type InstanceIconType = typeof instanceIconType[keyof typeof instanceIconType];
export type InstanceIconTypeWithNull = InstanceIconType | null;
