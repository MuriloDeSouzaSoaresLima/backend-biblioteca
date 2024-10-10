/**
 * Classe que representa um emprestimo.
 */
export class Emprestimo {

    /* Atributos */
    /* Identificador do emprestimo */
    private idAluno: number = 0;
    /* Ra do emprestimo */
    private ra: number = 0
    /* nome do emprestimo */
    private nome: string;
    /* sobrenome do emprestimo */
    private sobrenome: string;
    /* nascimento do emprestimo */
    private nascimento: Date;
    /* endereço do emprestimo */
    private endereço: string;
    private email: string;
    private celular: number;


    /**
     * Construtor da classe Aluno
     * 
     * @param nome nome do emprestimo
     * @param sobrenome sobrenome do emprestimo
     * @param nascimento Nascimento do emprestimo
     * @param endereço endereço do emprestimo
     * @param email email no emprestimo
     * @param celular telefone do emprestimo
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
     * Recupera o identificador do emprestimo
     * @returns o identificador do emprestimo
     */
    public getIdAluno(): number {
        return this.idAluno;
    }

    /**
     * Atribui um valor ao identificador do emprestimo
     * @param idAluno novo identificado do emprestimo
     */
    public setIdAluno(idAluno: number): void {
        this.idAluno = idAluno;
    }

    /**
     * Retorna a nome do emprestimo.
     *
     * @returns {string} A nome do emprestimo.
     */
    public getNome(): string {
        return this.nome;
    }

    /**
     * Define a nome do emprestimo.
     * 
     * @param nome - A nome do emprestimo a ser definida.
     */
    public setNome(nome: string): void {
        this.nome = nome;
    }

    /**
     * Retorna o sobrenome do emprestimo.
     *
     * @returns {string} O sobrenome do emprestimo.
     */
    public getSobrenome(): string {
        return this.sobrenome;
    }

    /**
     * Define o sobrenome do emprestimo.
     *
     * @param sobrenome - O nome do sobrenome do emprestimo.
     */
    public setSobrenome(sobrenome: string): void {
        this.sobrenome = sobrenome;
    }

    /**
     * Retorna o nascimento do emprestimo.
     *
     * @returns {Date}O nascimento do emprestimo.
     */
    public getNascimento(): Date {
        return this.nascimento;
    }

    /**
     * Define o nascimento do emprestimo.
     * 
     * @param nascimento - O nascimento a ser definido para o emprestimo.
     */
    public setNascimento(nascimento: Date): void {
        this.nascimento = nascimento;
    }

    /**
     * Retorna a endereço do emprestimo.
     *
     * @returns {string} A endereço do emprestimo.
     */
    public getEndereço(): string {
        return this.endereço;
    }

    /**
     * Define a endereço do emprestimo.
     * 
     * @param endereço - A endereço do emprestimo.
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