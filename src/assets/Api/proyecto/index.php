<?php
    require_once "./metodo.php";

    switch ($_SERVER['REQUEST_METHOD']) {
        case 'GET':
            if(isset($_GET['id'])) {
                echo json_encode(proyectos::getWhere($_GET['id']));
            }//end if
            else {
                echo json_encode(proyectos::getAll());
            }//end else
            break;
        case 'POST':
            $datos = json_decode(file_get_contents('php://input'));
            if($datos != NULL) {
                if(proyectos::insert($datos->descripcion,$datos->nombre_proyecto,$datos->persona_id, $datos->url_imagen, $datos->url_proyecto)) {
                    http_response_code(200);
                }//end if
                else {
                    http_response_code(400);
                }//end else
            }//end if
            else {
                http_response_code(405);
            }//end else
            break;

        case 'PUT':
            $datos = json_decode(file_get_contents('php://input'));
            if($datos != NULL) {
                if(proyectos::update($datos->id,$datos->descripcion,$datos->nombre_proyecto,$datos->persona_id, $datos->url_imagen, $datos->url_proyecto)) {
                    http_response_code(200);
                }//end if
                else {
                    http_response_code(400);
                }//end else
            }//end if
            else {
                http_response_code(405);
            }//end else
            break;
        case 'DELETE':
            if(isset($_GET['id'])){
                if(proyectos::delete($_GET['id'])) {
                    http_response_code(200);
                }//end if
                else {
                    http_response_code(400);
                }//end else
            }//end if 
            else {
                http_response_code(405);
            }//end else
            break;
        
        default:
            http_response_code(405);
            break;
    }//end while