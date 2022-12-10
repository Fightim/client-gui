export interface CreateInstanceDto {
  type: "t2.micro";
  os: "UBUNTU" | "CENTOS";
  tier: "WEBSERVER" | "WAS";
  name: string;
}

export interface CreateLoadBalancerDto {
  name: string;
}

export interface CreateRDSDto {
  name: string;
  masterUserName: string;
  rdsPassword: string;
  rdsPasswordCheck: string;
}
