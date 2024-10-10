/**
 * Classe que representa um livro.
 */
export class Livro {

    /* Atributos */
    /* Identificador do livro */
    private idLivro: number = 0;
    /* titulo do livro */
    private titulo: string;
    /* autor do livro */
    private autor: string;
    /* anoPublicacao do livro */
    private anoPublicacao: string;
    /* editora do livro */
    private editora: string;
    private isbn: string;
    private quantTotal: number;
    private quantDisponivel: number;
    private valorAquisicao: number;
    private statusLivroEmprestado: string;

    /**
     * Construtor da classe Livro
     * 
     * @param titulo titulo do livro
     * @param autor autor do livro
     * @param anoPublicacao Nascimento do livro
     * @param editora editora do livro
     * @param isbn isbn no livro
     * @param quantTotal quantidade total do livro
     * @param quantDisponivel quantidade disponivel do livro
     * @param valorAquisicao
     * @param statusLivroEmprestado status livro emprestado do livro
     */
    constructor(
        titulo: string,
        autor: string,
        anoPublicacao: string,
        editora: string,
        isbn: string,
        quantTotal: number,
        quantDisponivel: number,
        valorAquisicao: number,
        statusLivroEmprestado: string
    ) {
        this.titulo = titulo;
        this.autor = autor;
        this.anoPublicacao = anoPublicacao;
        this.editora = editora;
        this.isbn = isbn;
        this.quantTotal = quantTotal;
        this.quantDisponivel = quantDisponivel;
        this.valorAquisicao = valorAquisicao;
        this.statusLivroEmprestado = statusLivroEmprestado;
    }

    /* Métodos get e set */
    /**
     * Recupera o identificador do livro
     * @returns o identificador do livro
     */
    public getIdLivro(): number {
        return this.idLivro;
    }

    /**
     * Atribui um valor ao identificador do livro
     * @param idLivro novo identificado do livro
     */
    public setIdLivro(idLivro: number): void {
        this.idLivro = idLivro;
    }

    /**
     * Retorna a titulo do livro.
     *
     * @returns {string} A titulo do livro.
     */
    public getTitulo(): string {
        return this.titulo;
    }

    /**
     * Define a titulo do livro.
     * 
     * @param titulo - A titulo do livro a ser definida.
     */
    public setTitulo(titulo: string): void {
        this.titulo = titulo;
    }

    /**
     * Retorna o autor do livro.
     *
     * @returns {string} O autor do livro.
     */
    public getAutor(): string {
        return this.autor;
    }

    /**
     * Define o autor do livro.
     *
     * @param autor - O titulo do autor do livro.
     */
    public setAutor(autor: string): void {
        this.autor = autor;
    }

    /**
     * Retorna o anoPublicacao do livro.
     *
     * @returns {string}O anoPublicacao do livro.
     */
    public getAnoPublicacao(): string {
        return this.anoPublicacao;
    }

    /**
     * Define o anoPublicacao do livro.
     * 
     * @param anoPublicacao - O anoPublicacao a ser definido para o livro.
     */
    public setAnoPublicacao(anoPublicacao: string): void {
        this.anoPublicacao = anoPublicacao;
    }

    /**
     * Retorna a editora do livro.
     *
     * @returns {string} A editora do livro.
     */
    public getEditora(): string {
        return this.editora;
    }

    /**
     * Define a editora do livro.
     * 
     * @param editora - A editora do livro.
     */
    public setEditora(editora: string): void {
        this.editora = editora;
    }

    /**
     * @returns {string}
     */
    public getIsbn(isbn: string):string {
        return this.isbn;
    }

    /**
     * @param isbn
     */
    public setIsbn(isbn: string): void {
        this.isbn = isbn;
    }

     /**
     * @returns {number}
     */
     public getQuantTotal(quantTotal: number): number {
        return this.quantTotal;
    }

    /**
     * @param quantTotal
     */
    public setQuantTotal(quantTotal: number): void {
        this.quantTotal = quantTotal;
    }
    
    /**
     * @returns {number}
     */
     /**
     * @returns {number}
     */
     public getQuantDisponivel(quantDisponivel: number): number {
        return this.quantDisponivel;
    }

    /**
     * @param quantDisponivel
     */
    public setQuantDisponivel(quantDisponivel: number): void {
        this.quantDisponivel = quantDisponivel;
    }
    /**
     * @returns {number}
     */
    public getValorAquisicao(valorAquisicao: number): number {
        return this.valorAquisicao;
    }

    /**
     * @param valorAquisicao
     */
    public setValorAquisicao(valorAquisicao: number): void {
        this.valorAquisicao = valorAquisicao;
    }
    /**
     * @returns {string}
     */
    public getStatusLivroEmprestado(statusLivroEmprestado: string): string {
        return this.statusLivroEmprestado;
    }

    /**
     * @param statusLivroEmprestado
     */
    public setStatuslivroEmprestado(statusLivroEmprestado: string): void {
        this.statusLivroEmprestado = statusLivroEmprestado;
    }

}