import Person from "./ClassPerson";

class Student extends Person{
  private _enrollment: string;

  private _examsGrades: number[] = [];

  private _worksGrades: number[] = [];


  constructor(nome:string, birthDate:Date){
    super(nome, birthDate);
    this._enrollment = this.generateEnrollment();
  }

  public get enrollment_1(): string {
    return this._enrollment;
  }
  public set enrollment_1(value: string) {
    if (value.length < 16) throw new Error('A matrícula deve possuir no mínimo 16 caracteres.');

    this._enrollment = value;
  }
  
  public get examsGrades(): number[] {
    return this._examsGrades;
  }

  public set examsGrades(value: number[]) {
    if (value.length < 4) throw new Error('A pessoa estudante deve possuir no máximo 4 notas de provas.');

    this._examsGrades = value;
  }

  public get worksGrades(): number[] {
    return this._worksGrades;
  }

  public set worksGrades(value: number[]) {
    if (value.length < 2) throw new Error('A pessoa estudante deve possuir no máximo 2 notas de trabalhos.');
    this._worksGrades = value;
  }

  generateEnrollment(): string {
    const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');

    return `STU${randomStr}`;
  }

}

export default Student;