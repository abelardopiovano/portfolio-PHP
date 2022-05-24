<?php
    require_once "../connection/connection.php";

    class educacion {

        public static function getAll() {
            $db = new Connection();
            $query = "SELECT *FROM educacion";
            $resultado = $db->query($query);
            $datos = [];
            if($resultado->num_rows) {
                while($row = $resultado->fetch_assoc()) {
                    $datos[] = [
                        'id' => $row['id'],
                        'descripcion' => $row['descripcion'],
                        'nombre_inst' => $row['nombre_inst'],
                        'persona_id' => $row['persona_id'],
                        'titulo' => $row['titulo']
                        
                        
                    ];
                }//end while
                return $datos;
            }//end if
            return $datos;
        }//end getAll

        public static function getWhere($id_educacion) {
            $db = new Connection();
            $query = "SELECT *FROM educacion WHERE id=$id_educacion";
            $resultado = $db->query($query);
            $datos = [];
            if($resultado->num_rows) {
                while($row = $resultado->fetch_assoc()) {
                    $datos[] = [
                        'id' => $row['id'],
                        'descripcion' => $row['descripcion'],
                        'nombre_inst' => $row['nombre_inst'],
                        'persona_id' => $row['persona_id'],
                        'titulo' => $row['titulo']
                        
                        
                    ];
                }//end while
                return $datos;
            }//end if
            return $datos;
        }//end getWhere

        public static function insert($descripcion, $nombre_inst,$persona_id, $titulo) {
            $db = new Connection();
            $query = "INSERT INTO educacion (descripcion, nombre_inst,persona_id,titulo)
            VALUES('".$descripcion."', '".$nombre_inst."', '".$persona_id."', '".$titulo."')";
            $db->query($query);
            if($db->affected_rows) {
                return TRUE;
            }//end if
            return FALSE;
        }//end insert

        public static function update($id_educacion, $descripcion,$nombre_inst,$persona_id,$titulo) {
            $db = new Connection();
            $query = "UPDATE educacion SET
            descripcion='".$descripcion."', nombre_inst='".$nombre_inst."', persona_id='".$persona_id."' , titulo='".$titulo."' 
            WHERE id=$id_educacion";
            $db->query($query);
            if($db->affected_rows) {
                return TRUE;
            }//end if
            return FALSE;
        }//end update

        public static function delete($id_educacion) {
            $db = new Connection();
            $query = "DELETE FROM educacion WHERE id=$id_educacion";
            $db->query($query);
            if($db->affected_rows) {
                return TRUE;
            }//end if
            return FALSE;
        }//end delete

    }//end class Cliente
