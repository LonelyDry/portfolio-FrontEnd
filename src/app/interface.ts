export interface Portfolio {

    id?: number;
    Logo: string;
    Titulo: string;
    Periodo: number;
    Descripcion: string;
    /*Profile?: {
        banner: string;
        pic: string;
        name: string;
        title: string;
        sobremi: string;
    }*/
}

export interface experience {
    Logo: string;
    Puesto: string;
    Periodo: number,
    Tareas: string[]
}

export interface skills {
    id?: number;
    Skill: string;
    porcentaje: number;
}