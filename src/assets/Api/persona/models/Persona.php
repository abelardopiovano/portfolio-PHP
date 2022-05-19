<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");


    require_once "connection/Connection.php";

    class Persona
    {
        public static function getAll()
        {
            $db = new Connection();
            $query = "SELECT *FROM persona";
            $resultado = $db->query($query);
            $datos =[];

            if($resultado->num_rows)
            {   
                while($row = $resultado->fetch_assoc())
                {
                    $datos[]=[
                        'id'=>$row['id'],
                        'nombre'=>$row['nombre'],
                        'descripcion'=>$row['descripcion'],
                        'url_cv'=>$row['url_cv'],                      
                    ];
                }
                return $datos;
            }
            return $datos;
        }


        public static function getWhere($id_persona)
        {
            $db = new Connection();
            $query = "SELECT *FROM persona WHERE id=$id_persona";
            $resultado = $db->query($query);
            $datos =[];

            if($resultado->num_rows)
            {
                while($row = $resultado->fetch_assoc())
                {
                    $datos=[                    
                        'id'=>$row['id'],
                        'nombre'=>$row['nombre'],
                        'descripcion'=>$row['descripcion'],
                        'url_cv'=>$row['url_cv'],                      
                           ];
                }
                return $datos;
            }
            return $datos;
        }


        public static function insert($nombre, $descripcion, $url_cv)
        {
            $db = new Connection();
            $query = "INSERT INTO persona (nombre,descripcion,url_cv)
            VALUES('".$nombre."','".$descripcion."','".$url_cv."')";
            $db->query($query);
            if($db->affected_rows)
            {
                return TRUE;
            }
            return FALSE;

        }


        public static function update($id_persona,$nombre, $descripcion, $url_cv)
        {
            $db = new Connection();
            $query = "UPDATE persona SET
            nombre='".$nombre."',descripcion='".$descripcion."',url_cv='".$url_cv."' 
            WHERE id=$id_persona";
            $db->query($query);
            if($db->affected_rows)
            {
                return TRUE;
            }
            return FALSE;

        }


        public static function delete($id_persona)
        {
            $db=new Connection();
            $query = "DELETE FROM persona WHERE id=$id_persona";
            $db->query($query);
            if($db->affected_rows)
            {
                return TRUE;
            }
            return FALSE;
        }

    }

?>