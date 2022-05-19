


<?php


header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");
$method = $_SERVER['REQUEST_METHOD'];
if($method == "OPTIONS") {
    die();
}



    require_once"models/Persona.php";

    switch($_SERVER['REQUEST_METHOD'])
    {
        case 'GET':
            if(isset($_GET['id']))
            {
               
                //echo array(Persona::getAll());
                echo json_encode(Persona::getWhere($_GET['id']));
                
                
            }   
            else
            {   
                echo json_encode(Persona::getAll(),JSON_NUMERIC_CHECK); 
            }
            break;

        case 'POST':
            $datos = json_decode(file_get_contents('php://input'));
            if($datos != NULL)
            {
                if(Persona::insert($datos->nombre,$datos->descripcion,$datos->url_cv))
                {
                    //http_response_code(200);
                }
                else
                {
                    //http_response_code(400);
                }
            }
            else
            {
                //http_response_code(405);
            }
            break;
        
        
        case 'PUT':
            $datos = json_decode(file_get_contents('php://input'));
            if($datos != NULL)
            {
                if(Persona::update($datos->id,$datos->nombre,$datos->descripcion,$datos->url_cv))
                {
                    //http_response_code(200);
                }
                else
                {
                    //http_response_code(400);
                }
            }
            else
            {
                //http_response_code(405);
            }
            break;
        
        case 'DELETE':
            if(isset($_GET['id']))
            {
                if(Persona::delete($_GET['id']))
                {
                    //http_response_code(200);
                }
                else
                {
                    //http_response_code(400);
                }

            }
            else
            {
                //http_response_code(405);
            }
            break;

        default:
            break;

        
    }

?>