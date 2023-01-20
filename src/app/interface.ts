export interface profile {

    banner: string;
    profilepic: string;
    name: string;
    title: string;
    sobremi: string;

}
export interface experience {

    logo: string;
    puesto: string;
    periodo: number,
    tareas: [{
        text: string
    }]

}

export interface skills {

    id?: number;
    skill: string;
    porcentaje: number;

}
export interface information {


    id?: number;
    logo: string;
    titulo: string;
    periodo: number;
    descripcion: string;


}

export interface Portfolio extends profile, experience, skills, information { }