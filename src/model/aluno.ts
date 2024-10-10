/**
 * Classe que representa um aluno.
 */
export class Aluno {

    /* Atributos */
    /* Identificador do aluno */
    private idAluno: number = 0;
    /* Ra do aluno */
    private ra: string;
    /* nome do aluno */
    private nome: string;
    /* sobrenome do aluno */
    private sobrenome: string;
    /* nascimento do aluno */
    private nascimento: Date;
    /* endereço do aluno */
    private endereço: string;
    private email: string;
    private celular: number;


    /**
     * Construtor da classe Aluno
     * 
     * @param nome nome do aluno
     * @param sobrenome sobrenome do aluno
     * @param nascimento Nascimento do aluno
     * @param endereço endereço do aluno
     * @param email email no aluno
     * @param celular telefone do aluno
     */
    constructor(
        nome: string,
        sobrenome: string,
        nascimento: Date,
        endereço: string,
        email: string,
        celular: number
    ) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.nascimento = nascimento;
        this.endereço = endereço;
        this.email = email;
        this.celular = celular;
    }

    /* Métodos get e set */
    /**
     * Recupera o identificador do aluno
     * @returns o identificador do aluno
     */
    public getIdAluno(): number {
        return this.idAluno;
    }

    /**
     * Atribui um valor ao identificador do aluno
     * @param idAluno novo identificado do aluno
     */
    public setIdAluno(idAluno: number): void {
        this.idAluno = idAluno;
    }

        /**
     * Recupera o identificador do aluno
     * @returns {string}
     */
        public getRa(): string {
            return this.ra;
        }
    
        /**
         * Atribui um valor ao identificador do aluno
         * @param ra novo identificado do aluno
         */
        public setRa(ra: string): void {
            this.ra = ra;
        }
    

    /**
     * Retorna a nome do aluno.
     *
     * @returns {string} A nome do aluno.
     */
    public getNome(): string {
        return this.nome;
    }

    /**
     * Define a nome do aluno.
     * 
     * @param nome - A nome do aluno a ser definida.
     */
    public setNome(nome: string): void {
        this.nome = nome;
    }

    /**
     * Retorna o sobrenome do aluno.
     *
     * @returns {string} O sobrenome do aluno.
     */
    public getSobrenome(): string {
        return this.sobrenome;
    }

    /**
     * Define o sobrenome do aluno.
     *
     * @param sobrenome - O nome do sobrenome do aluno.
     */
    public setSobrenome(sobrenome: string): void {
        this.sobrenome = sobrenome;
    }

    /**
     * Retorna o nascimento do aluno.
     *
     * @returns {Date}O nascimento do aluno.
     */
    public getNascimento(): Date {
        return this.nascimento;
    }

    /**
     * Define o nascimento do aluno.
     * 
     * @param nascimento - O nascimento a ser definido para o aluno.
     */
    public setNascimento(nascimento: Date): void {
        this.nascimento = nascimento;
    }

    /**
     * Retorna a endereço do aluno.
     *
     * @returns {string} A endereço do aluno.
     */
    public getEndereço(): string {
        return this.endereço;
    }

    /**
     * Define a endereço do aluno.
     * 
     * @param endereço - A endereço do aluno.
     */
    public setEndereço(endereço: string): void {
        this.endereço = endereço;
    }

    /**
     * @returns {string}
     */
    public getEmail(email: string) {
        return this.email;
    }

    /**
     * @param email
     */
    public setEmail(email: string): void {
        this.email = email;
    }

     /**
     * @returns {number}
     */
     public getCelular(celular: number) {
        return this.celular;
    }

    /**
     * @param email
     */
    public setCelular(celular: number): void {
        this.celular = celular;
    }
}