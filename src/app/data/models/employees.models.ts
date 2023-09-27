import { MunicipalityModel } from "./municipality.models";
import { CampusModel } from "./campus.models";

import { StatusModel } from "./status.models";
import { WorkPositionModel } from "./work-position.models";
import { EmployeeTypeModel } from "./employee-type.models";

export class EmployeesModel {
    constructor(
      public idEmployee : number,
      public code : string,
      public firstName : string,
      public secondName : string,
      public firstLastName : string,
      public secondLastName : string,
      public hireDate  : string,
      public hireEndDate : string,
      public idCampus : CampusModel,
      public idEmployeeType : EmployeeTypeModel,
      public idStatus : StatusModel,
      public idWorkPosition : WorkPositionModel,
      public idMunicipality : MunicipalityModel,
      public addressReference : string,
      public BACaccount : string,
      public BAMaccount : string,
    ){}
};



