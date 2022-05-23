<?php



    require_once "../connection/connection.php";

    class Experiencia
    {
        public static function getAll()
        {
            $db = new Connection();
            $query = "SELECT *FROM experiencia";
            $resultado = $db->query($query);
            $datos =[];

            if($resultado->num_rows)
            {   
                while($row = $resultado->fetch_assoc())
                {
                    $datos[]=[
                        'id'=>$row['id'],
                        'cargo'=>$row['cargo'],
                        'descripcion'=>$row['descripcion'],
                        'nombre_empresa'=>$row['nombre_empresa'],
                        'persona_id'=>$row['persona_id'],                     
                    ];
                }
                return $datos;
            }
            return $datos;
        }


        public static function getWhere($id_experiencia)
        {
            $db = new Connection();
            $query = "SELECT *FROM experiencia WHERE id=$id_experiencia";
            $resultado = $db->query($query);
            $datos =[];

            if($resultado->num_rows)
            {
                while($row = $resultado->fetch_assoc())
                {
                    $datos[]=[                    
                        'id'=>$row['id'],
                        'cargo'=>$row['cargo'],
                        'descripcion'=>$row['descripcion'],
                        'nombre_empresa'=>$row['nombre_empresa'],
                        'persona_id'=>$row['persona_id'],                     
                    ];
                }
                return $datos;
            }
            return $datos;
        }


        public static function insert($cargo, $descripcion, $nombre_empresa, $persona_id)
        {
            $db = new Connection();
            $query = "INSERT INTO experiencia (cargo,descripcion,nombre_empresa,persona_id)
            VALUES('".$cargo."','".$descripcion."','".$nombre_empresa."','".$persona_id."')";
            $db->query($query);
            if($db->affected_rows)
            {
                return TRUE;
            }
            return FALSE;

        }


        public static function update($id_experiencia,$cargo, $descripcion, $nombre_empresa,$persona_id)
        {
            $db = new Connection();
            $query = "UPDATE experiencia SET
            cargo='".$cargo."',descripcion='".$descripcion."',nombre_empresa='".$nombre_empresa."',persona_id='".$persona_id."'
            WHERE id=$id_experiencia";
            $db->query($query);
            if($db->affected_rows)
            {
                return TRUE;
            }
            return FALSE;

        }


        public static function delete($id_experiencia)
        {
            $db=new Connection();
            $query = "DELETE FROM experiencia WHERE id=$id_experiencia";
            $db->query($query);
            if($db->affected_rows)
            {
                return TRUE;
            }
            return FALSE;
        }

    }

?>