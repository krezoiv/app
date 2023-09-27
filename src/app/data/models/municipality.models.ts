import { DepartmetsModel } from "./department.models";

export class MunicipalityModel {
    constructor(
      public idMunicipality : number,
      public idDepartment : DepartmetsModel,
      public municipality: string,
          ){}
};

