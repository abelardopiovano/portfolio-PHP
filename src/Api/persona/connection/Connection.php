<?php

    class Connection extends Mysqli
    {
        private $host     = 'localhost';
        private $user     = 'root';
        private $password = 'tesla378';
        private $database = 'portfolio_abelardo_piovano';

        function __construct()
        {
            parent::__construct($this->host,$this->user,$this->password,$this->database);
            $this->set_charset('utf8');
            $this->connect_error == NULL ? 'Conexión exitosa a la DB' : die('error al conectarse a la DB');

        }
    }
?>