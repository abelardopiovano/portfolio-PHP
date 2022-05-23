<?php

    require "cors.php";

    class Connection extends Mysqli
    {

        private $host     = 'localhost';
        private $user     = 'root';
        private $password = 'tesla378';
        private $database = 'portfolio_abelardo_piovano';
/*
        private $host     = 'sql107.eshost.com.ar';
        private $user     = 'eshos_22562986';
        private $password = 'Morpheus37878';
        private $database = 'eshos_22562986_portfolio_abelardo_piovano';
*/
        function __construct()
        {
            parent::__construct($this->host,$this->user,$this->password,$this->database);
            $this->set_charset('utf8');
            $this->connect_error == NULL ? 'Conexión exitosa a la DB' : die('error al conectarse a la DB');

        }
    }
?>