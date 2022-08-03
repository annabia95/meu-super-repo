interface IpessoaFuncionaria {
  registration: string;
  salary:number;
  admissionDate: Date;
  generateRegistration(): string;
}

export default IpessoaFuncionaria;