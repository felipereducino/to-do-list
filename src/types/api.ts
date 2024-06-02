export interface Data {
  color?: string;
  capacity?: string | number;
  price?: number;
  generation?: string;
  year?: number;
  "CPU model"?: string;
  "Hard disk size"?: string;
  "Strap Colour"?: string;
  "Case Size"?: string;
  Description?: string;
  "Screen size"?: number;
}

export interface ApiResponse {
  id: string;
  name: string;
  data: Data | null;
}
