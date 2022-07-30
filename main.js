(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Navbar -->\r\n<nav class=\"mb-1 navbar navbar-expand-lg navbar-dark \" style=\"background: #2980B9;\">\r\n  <a class=\"navbar-brand\" href=\"#\">Maconsa</a>\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent-333\"\r\n    aria-controls=\"navbarSupportedContent-333\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent-333\">\r\n    <ul class=\"navbar-nav mr-auto\">\r\n      <li class=\"nav-item dropdown\">\r\n        <a class=\"nav-link dropdown-toggle\" id=\"navbarDropdownMenuLink-333\" data-toggle=\"dropdown\"\r\n          aria-haspopup=\"true\" aria-expanded=\"false\">Catalogacion\r\n        </a>\r\n        <div class=\"dropdown-menu dropdown-default\" aria-labelledby=\"navbarDropdownMenuLink-333\">\r\n          <a class=\"dropdown-item\" routerLink=\"/producto\">Producto</a>\r\n          <a class=\"dropdown-item\" routerLink=\"/proveedor\">Proveedor</a>\r\n          <a class=\"dropdown-item\" routerLink=\"/usuario\">Usuario</a>\r\n        </div>\r\n      </li>\r\n      <li class=\"nav-item dropdown\">\r\n        <a class=\"nav-link dropdown-toggle\" id=\"navbarDropdownMenuLink-333\" data-toggle=\"dropdown\"\r\n          aria-haspopup=\"true\" aria-expanded=\"false\">Operacion\r\n        </a>\r\n        <div class=\"dropdown-menu dropdown-default\" aria-labelledby=\"navbarDropdownMenuLink-333\">\r\n          <a class=\"dropdown-item\" routerLink=\"/compra\">Compra</a>\r\n          <a class=\"dropdown-item\" href=\"#\">Venta</a>\r\n        </div>\r\n      </li>\r\n      <li class=\"nav-item dropdown\">\r\n        <a class=\"nav-link dropdown-toggle\" id=\"navbarDropdownMenuLink-333\" data-toggle=\"dropdown\"\r\n          aria-haspopup=\"true\" aria-expanded=\"false\">Logistica\r\n        </a>\r\n        <div class=\"dropdown-menu dropdown-default\" aria-labelledby=\"navbarDropdownMenuLink-333\">\r\n          <a class=\"dropdown-item\" routerLink=\"/inventario\">Inventario</a>\r\n          <a class=\"dropdown-item\" routerLink=\"/kardex\">Kardex</a>\r\n        </div>\r\n      </li>\r\n    </ul>\r\n    <ul class=\"navbar-nav ml-auto nav-flex-icons\">\r\n      <li class=\"nav-item dropdown\">\r\n        <a class=\"nav-link dropdown-toggle\" id=\"navbarDropdownMenuLink-333\" data-toggle=\"dropdown\"\r\n          aria-haspopup=\"true\" aria-expanded=\"false\">\r\n          <i class=\"fas fa-user\"></i>\r\n        </a>\r\n        <div class=\"dropdown-menu dropdown-menu-right dropdown-default\"\r\n          aria-labelledby=\"navbarDropdownMenuLink-333\">\r\n          <a class=\"dropdown-item\" href=\"#\">Mi Cuenta</a>\r\n          <a class=\"dropdown-item\" href=\"#\">Salir</a>\r\n        </div>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</nav>\r\n<!--/.Navbar -->\r\n\r\n\r\n\r\n<!---->\r\n\r\n\r\n\r\n<!---->\r\n<router-outlet></router-outlet>\r\n\r\n\r\n\r\n\r\n\r\n\r\n<!-- Footer -->\r\n<footer class=\"page-footer font-small py-2 text-center\"  style=\"background: #2980B9; \">\r\n\r\n  <!-- Copyright -->\r\n  <div class=\"footer-copyright\" style=\"background: #2980B9; \">Sistema De Control De Inventarios:\r\n    <a href=\"https://mdbootstrap.com/education/bootstrap/\"> Ferreteria Maconsa</a>\r\n  </div>\r\n  <!-- Copyright -->\r\n\r\n</footer>\r\n<!-- Footer -->\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/Compra/ingresar/ingresar.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/Compra/ingresar/ingresar.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container my-3\" style=\"border:solid 1px #D9EDF7;\">\r\n  \r\n        <div class=\"row \" style=\"background: #D9EDF7 ; color:#5D7F9A;\">\r\n\r\n            <div class=\"col-3 mt-2\">\r\n                    <h3><strong>Registrar Compra</strong> </h3> \r\n            </div>\r\n\t\t\t<div class=\"col-9\">\r\n\t\t\t\r\n\t\t\t\t\t<ol class=\"breadcrumb justify-content-end \" style=\"background: #D9EDF7;\">\r\n\t\t                         <li class=\"breadcrumb-item\"><a routerLink=\"/\"  style=\"color:#5D7F9A;\"><i class=\"fas fa-home\"></i> Inicio</a></li>\r\n\t\t                         <li class=\"breadcrumb-item\"><a routerLink=\"/compra\" style=\"color:#5D7F9A;\"><i class=\"fas fa-shopping-cart mr-1\"></i>Compras</a></li>\r\n\t\t            </ol>\r\n\t\t\t</div>\r\n\t\t\t\r\n        </div>\r\n\r\n        <div class=\"row pt-3\">\r\n\r\n            <div class=\"col-md-3\">\r\n\r\n                <div class=\"form-group\">\r\n\r\n                    <label for=\"\" ><strong>Tipo Comprobante</strong></label>\r\n\r\n                    <select class=\"form-control\" id=\"cmbTipoComprobante\"  [(ngModel)]=\"compra.comprobanteDePago.tipodecomprobantedepago.idTipoDeComprobanteDePago\"  required=\"required\">\r\n                            <option [value]=\"1\">Boleta</option>\r\n                            <option [value]=\"2\">Factura</option>\r\n                          </select>\r\n\r\n\r\n                </div>\r\n\r\n            </div>\r\n\r\n            <div class=\"col-md-2\">\r\n\r\n                    <div class=\"form-group \">\r\n    \r\n                        <label for=\"\"><strong>Serie</strong></label>\r\n    \r\n                        <input type=\"text\" placeholder=\"Serie\" id=\"txtSerie\" [(ngModel)]=\"compra.comprobanteDePago.serie\" class=\"form-control\" required=\"required\">\r\n    \r\n    \r\n                    </div>\r\n    \r\n            </div>\r\n\r\n            <div class=\"col-md-2\">\r\n\r\n                    <div class=\"form-group\">\r\n    \r\n                        <label for=\"\" ><strong>Numero</strong></label>\r\n    \r\n                        <input type=\"text\" placeholder=\"Numero\" id=\"txtNumeroComprobante\" [(ngModel)]=\"compra.comprobanteDePago.numero\" class=\"form-control\" required=\"required\">\r\n    \r\n    \r\n                    </div>\r\n    \r\n            </div>\r\n\r\n            <div class=\"col-md-3\">\r\n\r\n                    <div class=\"form-group\">\r\n    \r\n                        <label for=\"\" ><strong>Fecha</strong></label>\r\n    \r\n                        <input type=\"date\" id=\"dtFechaCompra\" [(ngModel)]=\"compra.fecha\" class=\"form-control\" required=\"required\">\r\n    \r\n    \r\n                    </div>\r\n    \r\n            </div>\r\n\r\n            <div class=\"col-md-2\">\r\n\r\n                    <div class=\"form-group\">\r\n    \r\n                        <label for=\"\" ><strong>Tipo de cambio</strong></label>\r\n    \r\n                        <select class=\"form-control\" id=\"cmbTipoDeCambio\" >\r\n                                <option th:value=\"Soles\">Soles</option>\r\n                                <option th:value=\"Dolares\">Dolares</option>\r\n                        </select>\r\n    \r\n    \r\n                    </div>\r\n    \r\n            </div>\r\n\r\n        </div>\r\n\r\n\r\n        <div class=\"row\">\r\n\r\n                <div class=\"col-md-3\">                                 \r\n\r\n                        <div class=\"form-group\">\r\n\r\n                                <label for=\"\"><strong>Ruc Proveedor:</strong></label>\r\n\r\n                                <div class=\"form-inline\">\r\n\r\n                                        <input type=\"text\" placeholder=\"Ruc \" class=\"form-control w-50\" [(ngModel)]=\"compra.proveedor.ruc\"  disabled id=\"txtRucProveedor\" >\r\n                                        <button type=\"button\" (click)=\"listaDeProveedores()\" class=\"btn btn-sm btn-primary ml-1\"  ><i class=\"fas fa-search\"></i></button>\r\n\r\n                                </div>                                 \r\n\r\n                        </div>  \r\n  \r\n                </div>\r\n\r\n                <div class=\"col-md-5\">                                 \r\n\r\n                        <div class=\"form-group\">\r\n\r\n                                <label for=\"\"><strong>Razon Social:</strong></label>\r\n\r\n                                <input type=\"text\" [(ngModel)]=\"compra.proveedor.denominacion\"  placeholder=\"Razon Social\" class=\"form-control\" disabled  id=\"txtRazonSocial\" >\r\n                                                                \r\n\r\n                        </div>  \r\n  \r\n                </div>\r\n\r\n                <div class=\"col-md-4\">                                 \r\n\r\n                        <div class=\"form-group\">\r\n\r\n                                <label for=\"\"><strong>Direccion:</strong></label>\r\n\r\n                                <input type=\"text\" placeholder=\"Direccion\" [(ngModel)]=\"compra.proveedor.direccion\"  class=\"form-control\" disabled  id=\"txtDireccion\" >\r\n                                                                \r\n\r\n                        </div>  \r\n  \r\n                </div>\r\n\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n\r\n                <div class=\"col-md-6\">                                 \r\n\r\n                        <div class=\"form-group\">\r\n\r\n                                <label for=\"\"><strong>Producto:</strong></label>\r\n\r\n                                <div class=\"form-inline\">\r\n\r\n                                        <input type=\"text\" placeholder=\"Desripcion producto\" [(ngModel)]=\"producto.descripcion\" class=\"form-control w-75\" disabled #txtDescripcionProducto>\r\n                                        <button type=\"button\"  class=\"btn btn-primary btn-sm ml-2\"  (click)=\"listaDeProductos()\">\r\n                                                <i class=\"fas fa-search\"></i>\r\n                                        </button>\r\n\r\n                                </div>                                 \r\n\r\n                        </div>  \r\n  \r\n                </div>\r\n\t\t\r\n\t\t\r\n                <div class=\"col-md-2\">                                 \r\n\r\n                        <div class=\"form-group\">\r\n\r\n                                <label for=\"\"><strong>Valor compra:</strong></label>\r\n\r\n                                <input type=\"text\" placeholder=\"Valor compra\" class=\"form-control\" [(ngModel)]=\"precioCompra\" name=\"txtValorCompra\"  id=\"txtValorCompra\" >\r\n                                                                \r\n\r\n                        </div>  \r\n  \r\n                </div>\r\n\r\n                <div class=\"col-md-2\">                                 \r\n\r\n                        <div class=\"form-group\">\r\n\r\n                                <label for=\"\"><strong>Cantidad:</strong></label>\r\n\r\n                                <input type=\"text\" placeholder=\"Cantidad\" class=\"form-control\" [(ngModel)]=\"cantidad\" name=\"txtCantidad\"  id=\"txtCantidad\" >\r\n                                                                \r\n\r\n                        </div>  \r\n  \r\n                </div>\r\n\r\n                <div class=\"col-md-2\">                                 \r\n\r\n                        <div class=\"form-group\">\r\n\r\n                                <label for=\"\"><strong>Unidad de medida:</strong></label>\r\n\r\n                                <input type=\"text\" placeholder=\"U. de medida\" class=\"form-control\" disabled  [(ngModel)]=\"producto.unidadDeMedida\" #txtUnidadDeMedida >\r\n                                                                \r\n\r\n                        </div>  \r\n  \r\n                </div>\r\n                \r\n                \r\n                 <div class=\"col-md-2\" hidden=\"hidden\">                                 \r\n\r\n                        <div class=\"form-group\">\r\n\r\n                                <label for=\"\"><strong>Id Producto:</strong></label>\r\n\r\n                                <input type=\"text\" placeholder=\"Id\" class=\"form-control\" name=\"txtidProducto\" [(ngModel)]=\"producto.idProducto\"  id=\"txtidProducto\" >\r\n                                                                \r\n\r\n                        </div>  \r\n  \r\n                </div>\r\n                \r\n\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n\r\n            <div class=\"col-md-2 col-sm-4\">\r\n\r\n                    <button [disabled]=\"!selectedProduct || cantidad<=0 || precioCompra<=0\" #btnAgregarProductos (click)=\"agregarProductoCarrito()\" class=\"btn btn-success btn-sm form-control\"><i class=\"fas fa-plus mr-2\"></i> Agregar</button>\r\n            </div>\r\n            \r\n        </div>\r\n\r\n        <hr>\r\n\r\n\r\n        <div class=\"row\">\r\n\r\n            <div class=\"col-12\">\r\n\r\n\r\n                    <div class=\"table-responsive\" style=\"height: 280px;\">\r\n\r\n                            <table class=\"table  table-sm table-striped \" id=\"tblProductosCarrito\">\r\n                                    <thead style=\"background: #2980B9; color: #D9EDF7;\">\r\n                                      <tr class=\"text-center\">\r\n                                        <th scope=\"col\">ID</th>\r\n                                        <th scope=\"col\">Descripcion</th>\r\n                                        <th scope=\"col\">Catidad</th>\r\n                                        <th scope=\"col\">Precio</th>\r\n                                        <th scope=\"col\">Opciones</th>\r\n                                      </tr>\r\n                                    </thead>\r\n                                    <tbody>\r\n\r\n                                        <tr class=\"text-center\" style=\"cursor: pointer;\"   *ngFor='let detalleComprobanteDePago of compra.comprobanteDePago.detalleComprobanteDePago'>\r\n                        \r\n                                                <td >{{detalleComprobanteDePago.producto.idProducto}}</td>\r\n                                                <td >{{detalleComprobanteDePago.producto.descripcion}} </td>\r\n                                                <td >{{detalleComprobanteDePago.cantidadCompra}} </td>\r\n                                                <td >{{detalleComprobanteDePago.valorVenta}} </td>\r\n                                                <td>\r\n                                                <button   (click)=\"editarDetalleComprobante(detalleComprobanteDePago)\"  class=\"btn btn-warning btn-sm mr-1\"><i class=\"fas fa-pen\"></i></button>\r\n                                                <button   (click)=\"eliminarDetalleComprobante(detalleComprobanteDePago)\"  class=\"btn btn-danger btn-sm mr-1\"><i class=\"fas fa-pen\"></i></button>\r\n                                                </td>\r\n                                        </tr>\r\n\r\n                                    </tbody>\r\n                                  </table>\r\n                    </div>\r\n\r\n            </div>\r\n        \r\n        </div>\r\n\r\n        <hr>\r\n\r\n        <div class=\"row mb-3\">\r\n\r\n            <div class=\"container\">\r\n\r\n                <div class=\"row\">\r\n\r\n                    <div class=\"col-6\">\r\n\r\n                        <div class=\"form-inline\">\r\n\r\n                                <label class=\"mr-2\"><strong>Total sin IGV: </strong></label> \r\n                                <input #txtTotalSinIgv [(ngModel)]=\"totalSinIgv\" name=\"txtTotalSinIgv\" type=\"text\" class=\"form-control w-50 text-center\" disabled>\r\n    \r\n                        </div>\r\n\r\n                    </div>\r\n\r\n                    <div class=\"col-md-4 col-sm-3\">\r\n\r\n                    </div>\r\n                    <div class=\"col-md-2  col-sm-3\" >\r\n\r\n                        <button id=\"btnGuardarCompra\" (click)=\"guardarCompra()\" class=\"float-right btn btn-success btn-sm form-control\"><i class=\"fas fa-save mr-2\"></i> Guardar</button>\r\n                    </div>\r\n\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n\r\n    </div>\r\n\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/Compra/listar/listar.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/Compra/listar/listar.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container my-3\">\r\n\r\n        <div class=\"row\">\r\n\r\n            <div class=\"col\">\r\n\r\n                    <nav aria-label=\"breadcrumb\" >\r\n                            <ol class=\"breadcrumb\" style=\"background: #D9EDF7; \">\r\n                              <li class=\"breadcrumb-item\"><a routerLink=\"/\" style=\"color:#5D7F9A;\"><i class=\"fas fa-home\"></i> Inicio</a></li>\r\n                              <li class=\"breadcrumb-item\"><a routerLink=\"/compra\" style=\"color:#5D7F9A;\"><i class=\"fas fa-shopping-cart\"></i> Compras</a></li>\r\n                              <li class=\"breadcrumb-item\"><a routerLink=\"/compra/listar\" style=\"color:#5D7F9A;\"><i class=\"fas fa-cart-plus\"></i> Nueva Compra</a></li>               \r\n                            </ol>\r\n                    </nav>\r\n\r\n            </div>\r\n\r\n                \r\n        </div>\r\n\r\n        <div class=\"row\">\r\n\r\n            <div class=\"col-12\">\r\n\r\n                    <div class=\"container\" style=\"border: solid #D9EDF7 1px;\">\r\n\r\n\r\n                            <div class=\"row  py-2\" style=\"background: #D9EDF7; color: #5D7F9A;\">\r\n                                \r\n                                <div class=\"col\">\r\n                        \r\n                                        <span style=\"float: left;\"> <h4><strong>Buscar Compra</strong></h4></span>\r\n                                        <span style=\"float: right; margin-top: 5px;\"><i class=\"far fa-hand-pointer\"></i> Has doble click en la fila para ver detalle</span>                      \r\n                                </div>\r\n                        \r\n                            </div>\r\n                        \r\n                            <div class=\"row pt-3\">\r\n                        \r\n                                <div class=\"col\">\r\n                        \r\n                                        <form class=\"form-inline\" action=\"/Compra/Buscar\" method=\"post\">\r\n\r\n                                                <div class=\"form-group mx-sm-2 mb-2\">\r\n                                                  <input type=\"text\"  name=\"txtDenominacionProveedorCompra\" class=\"form-control\"   placeholder=\"Buscar por proveedor\">\r\n                                                </div>\r\n                                                <button type=\"submit\" class=\"btn btn-primary mb-2 ml-2 btn-sm\"><i class=\"fas fa-search\"></i> Buscar</button>\r\n                                        \t\t\r\n                                        </form>\r\n                                        \r\n                                        \r\n                        \r\n                                </div>\r\n                            \r\n                        \r\n                            </div>\r\n                        \r\n                            <div class=\"row\" >\r\n                        \r\n                        \r\n                               <div class=\"container mt-3 mb-2\">\r\n                               \r\n\t                               <div class=\"table-responsive\" style=\"height: 345px;\">\r\n\t                               \r\n\t                               <table class=\"table table-sm table-striped table-hover\" id=\"tblListaCompras\">\r\n                                            <thead style=\"background: #2980B9; color: #D9EDF7;\">\r\n                                              <tr class=\"text-center\">\r\n                                                <th scope=\"col\">Codigo</th>\r\n                                                <th scope=\"col\">RUC</th>\r\n                                                <th scope=\"col\">Proveedor</th>\r\n                                                <th scope=\"col\">Numero</th>\r\n                                                 <th scope=\"col\">Serie</th>\r\n                                                <th scope=\"col\"> Tipo</th>\r\n                                                <th scope=\"col\"> Fecha</th>\r\n                                                <th scope=\"col\">Ver Detalle</th>\r\n                                              </tr>\r\n                                            </thead>\r\n                                            <tbody>\r\n                                                \r\n                                                <tr class=\"text-center\" style=\"cursor: pointer;\" (dblclick)=\"detalleCompraDoubleClick(compra)\"  *ngFor='let compra of compraService.compras'>\r\n\t                     \r\n                                                        <td >{{compra.idCompra}}</td>\r\n                                                        <td >{{compra.proveedor.ruc}} </td>\r\n                                                        <td >{{compra.proveedor.denominacion}} </td>\r\n                                                        <td >{{compra.comprobanteDePago.numero}} </td>\r\n                                                        <td>{{compra.comprobanteDePago.serie}} </td>\r\n                                                        <td>{{compra.comprobanteDePago.tipodecomprobantedepago.descTipoDeComprobanteDePago}} </td>\r\n                                                        <td>{{compra.fecha | date: 'yyyy-MM-dd HH:mm'}} </td>\r\n                                                        <td>\r\n                                                        <button   (click)=\"detalleCompra(compra)\"  class=\"btn btn-warning btn-sm mr-1\"><i class=\"fas fa-pen\"></i></button>\r\n                                                        </td>\r\n                                                </tr>\r\n                                         \r\n                                        \r\n                                              \r\n                                            </tbody>\r\n                                          </table>\r\n\t                               \r\n\t                               </div>\r\n\r\n                               </div>                                 \r\n                        \r\n                            </div>\r\n                        \r\n\r\n                        </div>\r\n\r\n            </div>\r\n\r\n        </div>\r\n\r\n    </div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/inventario/inventario.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/inventario/inventario.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container my-3\">\r\n\r\n    <div class=\"row\" style=\"background: #D9EDF7; color:#5D7F9A;\">\r\n\r\n        <h3 class=\"ml-2\"><strong>Inventario</strong></h3>\r\n\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n\r\n        <div class=\"container mt-3\" >\r\n\r\n            <div class=\"row\" >\r\n\r\n                <div class=\"col-md-3 col-sm-2\">\r\n\r\n                </div>\r\n\r\n                <div class=\"col-md-3 col-sm-4\" style=\"border:solid 1px #D9EDF7;\">\r\n\r\n                    <div class=\"form-group text-center\">\r\n\r\n                        <label for=\"\"><strong>Costo del inventario</strong></label>\r\n                        <h3 >{{costoInventario}}</h3>\r\n\r\n                    </div>\r\n\r\n                </div>\r\n\r\n                <div class=\"col-md-3 col-sm-4 text-center\" style=\"border:solid 1px #D9EDF7;\">\r\n\r\n                        <div class=\"form-group text-center\">\r\n\r\n                            <label for=\"\"><strong>Total de productos</strong></label>\r\n                            <h3 >{{totalProductosInventario}}</h3>\r\n\r\n                        </div>\r\n\r\n                    </div>\r\n\r\n            </div>\r\n\r\n        </div>\r\n\r\n    </div>\r\n\r\n    <hr>\r\n\r\n    <div class=\"row \">\r\n\r\n            <div class=\"col-12\">\r\n\r\n                        <ol class=\"breadcrumb\" style=\"background: #D9EDF7;\">\r\n                    \r\n                            <li class=\"breadcrumb-item\"><a  routerLink=\"/\" style=\"color:#5D7F9A;\"><i class=\"fas fa-home mr-2\"></i>Inicio</a></li>\r\n                            <li class=\"breadcrumb-item\"><a target=\"_blank\"  routerLink=\"/inventario\" style=\"color:#5D7F9A; \"><i class=\"fas fa-print mr-2\"></i>Imprimir</a></li>\r\n                            \r\n                        </ol>\r\n\r\n            </div>\r\n                            \r\n                      \r\n\r\n        </div>\r\n\r\n\r\n        <div class=\"row\"  >\r\n\r\n            <div class=\"col-12\">\r\n\r\n                <div class=\"table-responsive\"  style=\"height: 600px;\">\r\n\r\n                        <table class=\"table table-hover table-sm\" style=\"border:solid 2px #2980B9;\">\r\n\r\n                                <thead style=\"background: #2980B9; color:#D9EDF7;\">\r\n                                  <tr class=\"text-center\">\r\n                                    <th scope=\"col\">Codigo</th>\r\n                                    <th scope=\"col\">Descripcion</th>\r\n                                    <th scope=\"col\">Unidad De Medida</th>\r\n                                    <th scope=\"col\">Cantidad</th>\r\n                                    <th scope=\"col\">Precio</th>\r\n                                  </tr>\r\n                                </thead>\r\n                                <tbody> \r\n                                        <tr class=\"text-center\" style=\"cursor: pointer;\"  *ngFor='let producto of inventarioService.listaProductosInventario'>\r\n\t                     \r\n                                                <td >{{producto.idProducto}}</td>\r\n                                                <td >{{producto.descripcion}} </td>\r\n                                                <td >{{producto.unidadDeMedida}} </td>\r\n                                                <td >{{producto.cantidad}} </td>\r\n                                                <td>{{producto.valorVenta}} </td>\r\n                                        </tr>\r\n                                \r\n                                </tbody>\r\n                                \r\n                        </table>\r\n\r\n                </div>\r\n\r\n            </div>\r\n\r\n        </div>\r\n\r\n            \r\n    </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/kardex/kardex.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/kardex/kardex.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n\r\n    <div class=\"row my-3\" style=\"background: #D9EDF7; color:#5D7F9A;\">\r\n            <div class=\"col-2\">\r\n    \r\n                    <h2 ><strong>Kardex</strong></h2>\r\n    \r\n            </div>\r\n    \r\n            <div class=\"col-7\">\r\n    \r\n            </div>\r\n            <div class=\"col-3 pt-2\">\r\n                <span style=\"float: right; color: #5D7F9A;\">\r\n                          <a target=\"_blank\" style=\"text-decoration: none;\" routerLink=\"/kardex\" >\r\n                          <label style=\"cursor: pointer;\">Imprimir</label>&nbsp;\r\n                          <i class=\"fas fa-print\" style=\"cursor: pointer;\"></i>\r\n                          </a>  \r\n                </span>\r\n                \r\n            </div>\r\n    \r\n        </div>\r\n        \r\n     <form >\r\n    \r\n        <div class=\"row\">\r\n    \r\n            <div class=\"col-md-3 col-sm-6\">\r\n    \r\n                <div class=\"form-group\">\r\n    \r\n                    <label for=\"\"><strong>Mes</strong></label>\r\n                    \r\n                    <select class=\"form-control\" name=\"cmbMes\" id=\"cmbMes\" required=\"required\">\r\n                    \r\n                            <option th:value=\"0\">Seleccione</option>\r\n                            <option th:value=\"1\">Enero</option>\r\n                            <option th:value=\"2\">Febrero</option>\r\n                            <option th:value=\"3\">Marzo</option>\r\n                            <option th:value=\"4\">Abril</option>\r\n                            <option th:value=\"5\">Mayo</option>\r\n                            <option th:value=\"6\">Junio</option>\r\n                            <option th:value=\"7\">Julio</option>\r\n                            <option th:value=\"8\">Agosto</option>\r\n                            <option th:value=\"9\">Septiembre</option>\r\n                            <option th:value=\"10\">Octubre</option>\r\n                            <option th:value=\"11\">Noviembre</option>\r\n                            <option th:value=\"12\">Diciembre</option>\r\n                    </select>\r\n                </div>\r\n    \r\n            </div>\r\n    \r\n            <div class=\"col-md-2 col-sm-6\">\r\n    \r\n                    <div class=\"form-group\">\r\n        \r\n                        <label for=\"\"><strong>Año</strong></label>\r\n                        <select class=\"form-control\" name=\"cmbAnios\" id=\"cmbAnios\" required=\"required\">\r\n                                <option th:value=\"2019\">2019</option>\r\n                                <option th:value=\"2020\">2020</option>\r\n                                <option th:value=\"2021\">2021</option>\r\n                                <option th:value=\"2022\">2022</option>\r\n                        </select>\r\n                    </div>\r\n        \r\n            </div>\r\n    \r\n    \r\n            <div class=\"col-md-3\">\r\n    \r\n                <div class=\"form-group\">\r\n    \r\n                    <label for=\"\"><strong>Metodo de valuacion</strong></label>\r\n                    <input type=\"text\" required=\"required\" class=\"form-control\" name=\"txtMetodoDeValuacion\" placeholder=\"Metodo de valuacion\">\r\n    \r\n                </div>\r\n    \r\n            </div>\r\n    \r\n            <div class=\"col-md-2\">\r\n    \r\n                    <div class=\"form-group\">\r\n        \r\n                        <label for=\"\"><strong>Tipo</strong></label>\r\n                        <input type=\"text\" disabled class=\"form-control\" value=\"MERCADERIA\">\r\n        \r\n                    </div>\r\n        \r\n            </div>\r\n    \r\n    \r\n        </div>\r\n    \r\n        <div class=\"row\">\r\n    \r\n            <div class=\"col-md-2\">\r\n    \r\n                <div class=\"form-group\">\r\n    \r\n                    <label for=\"\"><strong>Empresa</strong></label>\r\n                    <input type=\"text\" value=\"MACONSA S.A.C.\" disabled class=\"form-control\">\r\n    \r\n                </div>\r\n    \r\n            </div>\r\n    \r\n            <div class=\"col-md-6\">\r\n    \r\n                    <div class=\"form-group\">\r\n        \r\n                        <label for=\"\"><strong>Direccion</strong></label>\r\n                        <input type=\"text\" value=\"Wichanzao Mz 12 Lote 52, La Esperanza\" disabled class=\"form-control\">\r\n        \r\n                    </div>\r\n        \r\n            </div>\r\n    \r\n            <div class=\"col-md-2\">\r\n    \r\n                    <div class=\"form-group\">\r\n        \r\n                        <label for=\"\"><strong>Ruc</strong></label>\r\n                        <input type=\"text\" value=\"20481564361\" disabled class=\"form-control\">\r\n        \r\n                    </div>\r\n        \r\n            </div>\r\n    \r\n        </div>\r\n    \r\n        <div class=\"row\">\r\n    \r\n                <div class=\"col-md-3\">\r\n    \r\n                    <div class=\"form-group\">\r\n                        \r\n                        \r\n                                <label for=\"\"><strong>ID Producto</strong></label>\r\n                                <div class=\"form-inline\">\r\n                                        <input  type=\"text\" name=\"txtidProducto\" id=\"txtidProducto\" required=\"required\" onkeypress=\"return false;\" class=\"form-control w-50 mr-2\">\r\n                                        <button class=\"btn btn-primary btn-sm\" type=\"button\" onclick=\"listaDeProductos()\" data-toggle=\"modal\" data-target=\".modalBuscarProducto-xl\" ><i class=\"fas fa-search\"></i></button>\r\n                                </div>\r\n                               \r\n    \r\n                            \r\n                        </div>\r\n    \r\n    \r\n                </div>\r\n    \r\n                <div class=\"col-md-6\">\r\n    \r\n                        <div class=\"form-group\">\r\n            \r\n                            <label for=\"\"><strong>Descripcion</strong></label>\r\n                            <input type=\"text\" id=\"txtDescripcion\" placeholder=\"Descripcion\"  disabled class=\"form-control\">\r\n            \r\n                        </div>\r\n            \r\n                </div>\r\n    \r\n                <div class=\"col-md-2\">\r\n    \r\n                        <div class=\"form-group\">\r\n            \r\n                            <label for=\"\"><strong>Unidad de medida</strong></label>\r\n                            <input id=\"txtUnidadDeMedida\" type=\"text\" placeholder=\"Unidad de medida\" disabled class=\"form-control\">\r\n            \r\n                        </div>\r\n            \r\n                </div>\r\n    \r\n        </div>\r\n    \r\n        <hr>\r\n    \r\n        <div class=\"form-inline mt-1\">\r\n    \r\n                <button id=\"btnBuscarKardex\"  type=\"button\" name=\"btnBuscarKardex\" class=\"btn btn-primary btn-sm mr-4\" ><i class=\"fas fa-search\"></i> Generar Busqueda</button>\r\n    \r\n    \r\n    \r\n    \r\n                    <div class=\"form-inline mr-2\">\r\n        \r\n                        <label for=\"\"><strong>Total sin IGV Compra</strong></label>\r\n                        <input type=\"text\" disabled id=\"txtCantidadCompraSinIGV\"  class=\"form-control ml-3 text-center\">\r\n        \r\n                    </div>\r\n        \r\n            \r\n    \r\n    \r\n                    <div class=\"form-inline \">\r\n        \r\n                        <label for=\"\" ><strong >Total sin IGV Venta</strong></label>\r\n                        <input type=\"text\" disabled  id=\"txtCantidadVentaSinIGV\"  class=\"form-control ml-3 text-center\">\r\n        \r\n                    </div>\r\n    \r\n        </div>\r\n        \r\n        </form>\r\n    \r\n        <hr>\r\n    \r\n        <div class=\"row\">\r\n    \r\n            <div class=\"col-12\">\r\n    \r\n                <div class=\"table-responsive\" style=\"height: 500px;\">\r\n    \r\n    \r\n                        <table class=\"table table-sm table-hover\" id=\"tblKardex\">\r\n                                <thead style=\"background: #2980B9; color: #D9EDF7;\">\r\n                                    <tr class=\"text-center\">\r\n                                    <th scope=\"col\">Fecha</th>\r\n                                    <th scope=\"col\">Tipo</th>\r\n                                    <th scope=\"col\">Serie</th>\r\n                                    <th scope=\"col\">Numero</th>\r\n                                    <th scope=\"col\">Operacion</th>\r\n                                    <th scope=\"col\">Cantidad</th>\r\n                                    <th scope=\"col\">Costo Uni.</th>\r\n                                    <th scope=\"col\">Costo Total</th>\r\n                                    <th scope=\"col\">Cant. Final</th>\r\n                                    </tr>\r\n                                </thead>\r\n                                <tbody>\r\n                                      \r\n                                </tbody>\r\n                            </table>\r\n    \r\n                </div>\r\n    \r\n            </div>\r\n    \r\n        </div>\r\n    \r\n    </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/modal-detalle-compra/modal-detalle-compra.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/modal-detalle-compra/modal-detalle-compra.component.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\" style=\"background: #2980B9; color:white;\">\r\n    <h4 class=\"modal-title pull-left\"><i class=\"fas fa-user\"></i>&nbsp;  {{ title }} </h4>\r\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n    <span aria-hidden=\"true\" style=\"color: white;\">&times;</span>\r\n    </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n\r\n    <div class=\"container\">\r\n\r\n        <form [formGroup]=\"\">\r\n\r\n            \r\n            <div class=\"row\">\r\n    \r\n                    <div class=\"col-6\">\r\n                        \r\n                            <div class=\"form-group\">\r\n                            \r\n                                <label><strong>ID</strong></label>\r\n                                <input  placeholder=\"ID Usuario\"  readonly type=\"text\"  class=\"form-control w-50\" name=\"ID\">\r\n                                \r\n                            </div>\r\n                        \r\n                    </div>\r\n\r\n                            <div class=\"col-6\">\r\n\r\n                                    <div class=\"form-group form-sm\">\r\n                                    \r\n                                        <label><strong>Dni</strong></label>\r\n                                        <input minlength=\"8\" type=\"text\"   placeholder=\"Dni\" class=\"form-control w-50\" required=\"required\">\r\n                                    </div>\r\n\r\n                                \r\n                                </div>\r\n                                \r\n                                <div class=\"col-6\">\r\n                                \r\n                                    <div class=\"form-group form-sm\">\r\n                                    \r\n                                        <label><strong>Nombres</strong></label>\r\n                                        <input  type=\"text\" placeholder=\"Ingresa los nombres\" class=\"form-control\" required=\"required\">\r\n                                    </div>\r\n                                \r\n                                </div>\r\n                                \r\n                                <div class=\"col-md-6\">\r\n                                \r\n                                    <div class=\"form-group\">\r\n                                    \r\n                                        <label><strong>Apellidos</strong></label>\r\n                                        <input  type=\"text\"  placeholder=\"Ingresa los apellidos\" class=\"form-control\" required=\"required\">\r\n                                    </div>\r\n                                \r\n                                </div>\r\n                                \r\n                                <div class=\"col-md-6\">\r\n                                \r\n                                    <div class=\"form-group\">\r\n                                    \r\n                                        <label><strong>Telefono</strong></label>\r\n                                        <input minlength=\"6\" type=\"text\"   placeholder=\"Ingresa un telefono\" class=\"form-control\" required=\"required\">\r\n                                    </div>\r\n                                \r\n                                </div>\r\n    \r\n       \r\n                            \r\n                            <div class=\"col-md-6\">\r\n                            \r\n                                <div class=\"form-group\">\r\n                                \r\n                                    <label><strong>Usuario</strong></label>\r\n                                    <input  type=\"text\"  placeholder=\"Ingresa el nombre de usuario\" class=\"form-control\" required=\"required\">\r\n                                </div>\r\n                            \r\n                            </div>\r\n                            \r\n                            <div class=\"col-md-6\">\r\n                            \r\n                                <div class=\"form-group\">\r\n                                \r\n                                    <label><strong>Password</strong></label>\r\n                                    <input type=\"password\"  placeholder=\"Ingresa el password\" class=\"form-control\" required=\"required\">\r\n                                </div>\r\n                            \r\n                            </div>\r\n                            \r\n            </div>\r\n\r\n        </form>\r\n    \r\n    </div>    \r\n\r\n</div>\r\n  \r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-info btn-sm\" (click)=\"modalRef.hide()\"><i class=\"fas fa-times mr-1\"></i>Cerrar</button>\r\n    <button type=\"button\" class=\"btn btn-success btn-sm\" (click)=\"guardar()\"><i class=\"fas fa-save mr-1\"></i>Guardar</button>\r\n  </div>\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/modal-listar-productos/modal-listar-productos.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/modal-listar-productos/modal-listar-productos.component.html ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\" style=\"background: #2980B9; color:white;\">\r\n    <h4 class=\"modal-title pull-left\"><i class=\"fas fa-box-open\"></i>&nbsp;  {{ title }} </h4>\r\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n      <span aria-hidden=\"true\" style=\"color: white;\">&times;</span>\r\n    </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n\r\n    <div class=\"container\">\r\n       \r\n        <div class=\"row\" >\r\n\r\n            <div class=\"container mt-3\">\r\n            \r\n            <div class=\"table-responsive\" style=\"height: 450px;\">\r\n            \r\n                 <table class=\"table table-sm  table-hover\" id=\"tblListarProductos\">\r\n                         <thead style=\"background: #D9EDF7;\">\r\n                           <tr class=\"text-center\">\r\n                               <th scope=\"col\">ID</th>\r\n                             <th scope=\"col\">Descripcion</th>\r\n                             <th scope=\"col\">U. De Medida</th>\r\n                             <th scope=\"col\">Cantidad</th>\r\n                              <th scope=\"col\">Valor venta</th>\r\n                             <th scope=\"col\"> Seleccionar</th>\r\n                           </tr>\r\n                         </thead>\r\n                         \r\n                         <tbody>\r\n                             \r\n                              <tr class=\"text-center\" style=\"cursor: pointer;\" (dblclick)=\"seleccionarProductoDoubleClick(producto)\"  *ngFor='let producto of productoService.productos'>\r\n                              \r\n                                 <td >{{producto.idProducto}}</td>\r\n                                 <td >{{producto.descripcion}} </td>\r\n                                 <td >{{producto.unidadDeMedida}} </td>\r\n                                 <td >{{producto.cantidad}} </td>\r\n                                 <td>{{producto.valorVenta}} </td>\r\n                                 <td>\r\n                                 <button (click)=\"seleccionarProducto(producto)\"  class=\"btn btn-primary btn-sm mr-1\"><i class=\"fas fa-hand-pointer\"></i></button>\r\n                                 </td>\r\n                               </tr>\r\n                             \r\n                      \r\n                             </tbody>\r\n                  \r\n                    </table>\r\n                \r\n                </div>\r\n     \r\n            </div>\r\n    \r\n     </div>    \r\n    \r\n</div>\r\n      "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/modal-listar-proveedor/modal-listar-proveedor.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/modal-listar-proveedor/modal-listar-proveedor.component.html ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\" style=\"background: #2980B9; color:white;\">\r\n    <h4 class=\"modal-title pull-left\"><i class=\"fas fa-box-open\"></i>&nbsp;  {{ title }} </h4>\r\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n      <span aria-hidden=\"true\" style=\"color: white;\">&times;</span>\r\n    </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n\r\n    <div class=\"container\">\r\n       \r\n        <div class=\"row\" >\r\n    \r\n            <div class=\"container mt-3\">\r\n            \r\n            <div class=\"table-responsive\" style=\"height: 350px;\">\r\n            \r\n                 <table class=\"table table-sm  table-hover\">\r\n                         <thead style=\"background: #D9EDF7;\">\r\n                           <tr class=\"text-center\">\r\n                                 <th scope=\"col\">RUC</th>\r\n                                 <th scope=\"col\">Denominacion</th>\r\n                                 <th scope=\"col\">Direccion</th>\r\n                                 <th scope=\"col\">Telefono</th>\r\n                                 <th scope=\"col\"> Acciones</th>\r\n                           </tr>\r\n                         </thead>\r\n                         \r\n                         <tbody>\r\n                             \r\n                             <tr class=\"text-center\" style=\"cursor: pointer;\" (dblclick)=\"seleccionarProveedorDoubleClick(proveedor)\"  *ngFor='let proveedor of proveedorService.proveedores'>\r\n                          \r\n                                 <td >{{proveedor.ruc}}</td>\r\n                                 <td >{{proveedor.denominacion}} </td>\r\n                                 <td >{{proveedor.direccion}} </td>\r\n                                 <td >{{proveedor.telefono}} </td>\r\n                                 <td>\r\n                                 <button class=\"btn btn-primary btn-sm \" (click)=\"seleccionarProveedor(proveedor)\"><i class=\"fas fa-hand-pointer\"></i></button>\r\n                                 </td>\r\n                             </tr>\r\n                      \r\n                         </tbody>\r\n                  \r\n                  </table>\r\n            \r\n                </div>\r\n     \r\n            </div>\r\n     \r\n         </div>\r\n    \r\n     </div>    \r\n    \r\n</div>\r\n      "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/modal-proveedor/modal-proveedor.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/modal-proveedor/modal-proveedor.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\" style=\"background: #2980B9; color:white;\">\r\n    <h4 class=\"modal-title pull-left\"><i class=\"fas fa-truck\"></i>&nbsp;  {{ title }} </h4>\r\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n      <span aria-hidden=\"true\" style=\"color: white;\">&times;</span>\r\n    </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n\r\n    <div class=\"container\">\r\n\r\n        <form [formGroup]=\"formProveedor\">\r\n\r\n            <div class=\"row\">\r\n    \r\n                    <div class=\"col-4\">\r\n                        \r\n                            <div class=\"form-group\">\r\n                            \r\n                                <label><strong>Ruc</strong></label>\r\n                                <input [(ngModel)]=\"proveedor.ruc\" placeholder=\"Ruc\" formControlName=\"ruc\" type=\"text\" id=\"txtruc\" class=\"form-control\" name=\"ruc\">\r\n                                \r\n                            </div>\r\n                        \r\n                        </div>\r\n                    \r\n                        <div class=\"col-12\">\r\n                        \r\n                            <div class=\"form-group\">\r\n                            \r\n                                <label><strong>Descripcion</strong></label>\r\n                                <input [(ngModel)]=\"proveedor.denominacion\"   formControlName=\"denominacion\" id=\"txtDescrpcionRegistro\"  type=\"text\" placeholder=\"Ingresa una descripcion\" name=\"descripcion\" class=\"form-control\" required=\"required\">\r\n                                <div id=\"mensajeDescripcionRegistro\" class=\"\"></div>\r\n                            </div>\r\n                        \r\n                        </div>\r\n                        \r\n                        <div class=\"col-md-12\">\r\n                        \r\n                            <div class=\"form-group\">\r\n                            \r\n                                <label><strong>Direccion</strong></label>\r\n                                <input [(ngModel)]=\"proveedor.direccion\"   formControlName=\"direccion\" id=\"txtDireccion\" type=\"text\" placeholder=\"Ingresa la direccion\" name=\"direccion\" class=\"form-control\" required=\"required\">\r\n                                <div id=\"mensajeUnidadDeMedidaRegistro\" class=\"\"></div>\r\n                            </div>\r\n                            \r\n                        \r\n                        </div>\r\n                        \r\n                        <div class=\"col-md-12\">\r\n                        \r\n                            <div class=\"form-group\">\r\n                            \r\n                                <label><strong>Telefono</strong> </label>\r\n                                <input [(ngModel)]=\"proveedor.telefono\"  id=\"telefono\" formControlName=\"telefono\" type=\"text\" placeholder=\"Ingresa un telefono\" name=\"telefono\" class=\"form-control\" required=\"required\">\r\n                                <div id=\"mensajeCantidadRegistro\" class=\"\"></div>\r\n                            </div>\r\n                        \r\n                        </div>       \t\r\n                    \r\n                    </div>\r\n            </form>\r\n    \r\n     </div>    \r\n    \r\n</div>\r\n      \r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-info btn-sm\" (click)=\"modalRef.hide()\"><i class=\"fas fa-times mr-1\"></i>Cerrar</button>\r\n        <button type=\"button\" class=\"btn btn-success btn-sm\" (click)=\"guardar()\"><i class=\"fas fa-save mr-1\"></i>Guardar</button>\r\n      </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/modal-usuario/modal-usuario.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/modal-usuario/modal-usuario.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n    <div class=\"modal-header\" style=\"background: #2980B9; color:white;\">\r\n        <h4 class=\"modal-title pull-left\"><i class=\"fas fa-user\"></i>&nbsp;  {{ title }} </h4>\r\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n        <span aria-hidden=\"true\" style=\"color: white;\">&times;</span>\r\n        </button>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n\r\n        <div class=\"container\">\r\n\r\n            <form [formGroup]=\"formUsuario\">\r\n\r\n                \r\n                <div class=\"row\">\r\n        \r\n                        <div class=\"col-6\">\r\n                            \r\n                                <div class=\"form-group\">\r\n                                \r\n                                    <label><strong>ID</strong></label>\r\n                                    <input [(ngModel)]=\"usuario.idUsuario\" placeholder=\"ID Usuario\" formControlName=\"idUsuario\" readonly type=\"text\"  class=\"form-control w-50\" name=\"ID\">\r\n                                    \r\n                                </div>\r\n                            \r\n                        </div>\r\n                        \r\n                        <fieldset formGroupName=\"persona\">\r\n\r\n                            <div class=\"container\">\r\n\r\n                                    <div class=\"row\">\r\n\r\n                                            <div class=\"col-6\">\r\n        \r\n                                                    <div class=\"form-group form-sm\">\r\n                                                    \r\n                                                        <label><strong>Dni</strong></label>\r\n                                                        <input [(ngModel)]=\"usuario.persona.dni\" minlength=\"8\" type=\"text\" formControlName=\"dni\"  placeholder=\"Dni\" class=\"form-control w-50\" required=\"required\">\r\n                                                    </div>\r\n                \r\n                                               \r\n                                                </div>\r\n                                               \r\n                                                <div class=\"col-6\">\r\n                                                \r\n                                                    <div class=\"form-group form-sm\">\r\n                                                    \r\n                                                        <label><strong>Nombres</strong></label>\r\n                                                        <input [(ngModel)]=\"usuario.persona.nombres\" type=\"text\" formControlName=\"nombres\" placeholder=\"Ingresa los nombres\" class=\"form-control\" required=\"required\">\r\n                                                    </div>\r\n                                                \r\n                                                </div>\r\n                                                \r\n                                                <div class=\"col-md-6\">\r\n                                                \r\n                                                    <div class=\"form-group\">\r\n                                                    \r\n                                                        <label><strong>Apellidos</strong></label>\r\n                                                        <input [(ngModel)]=\"usuario.persona.apellidos\" type=\"text\" formControlName=\"apellidos\" placeholder=\"Ingresa los apellidos\" class=\"form-control\" required=\"required\">\r\n                                                    </div>\r\n                                                \r\n                                                </div>\r\n                                                \r\n                                                <div class=\"col-md-6\">\r\n                                                \r\n                                                    <div class=\"form-group\">\r\n                                                    \r\n                                                        <label><strong>Telefono</strong></label>\r\n                                                        <input [(ngModel)]=\"usuario.persona.telefono\" minlength=\"6\" type=\"text\" formControlName=\"telefono\"  placeholder=\"Ingresa un telefono\" class=\"form-control\" required=\"required\">\r\n                                                    </div>\r\n                                                \r\n                                                </div>\r\n        \r\n                                    </div>\r\n                    \r\n                            </div>\r\n\r\n                           \r\n                            \r\n                                \r\n                            </fieldset>    \r\n                                \r\n                                \r\n                                <div class=\"col-md-6\">\r\n                                \r\n                                    <div class=\"form-group\">\r\n                                    \r\n                                        <label><strong>Usuario</strong></label>\r\n                                        <input [(ngModel)]=\"usuario.nombreUsuario\" type=\"text\" formControlName=\"nombreUsuario\" placeholder=\"Ingresa el nombre de usuario\" class=\"form-control\" required=\"required\">\r\n                                    </div>\r\n                                \r\n                                </div>\r\n                                \r\n                                <div class=\"col-md-6\">\r\n                                \r\n                                    <div class=\"form-group\">\r\n                                    \r\n                                        <label><strong>Password</strong></label>\r\n                                        <input [(ngModel)]=\"usuario.password\" type=\"password\" formControlName=\"password\" placeholder=\"Ingresa el password\" class=\"form-control\" required=\"required\">\r\n                                    </div>\r\n                                \r\n                                </div>\r\n                                \r\n                </div>\r\n\r\n            </form>\r\n        \r\n        </div>    \r\n    \r\n    </div>\r\n      \r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-info btn-sm\" (click)=\"modalRef.hide()\"><i class=\"fas fa-times mr-1\"></i>Cerrar</button>\r\n        <button type=\"button\" class=\"btn btn-success btn-sm\" (click)=\"guardar()\"><i class=\"fas fa-save mr-1\"></i>Guardar</button>\r\n      </div>\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/modal/modal.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/modal/modal.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\" style=\"background: #2980B9; color:white;\">\r\n        <h4 class=\"modal-title pull-left\"><i class=\"fas fa-box-open\"></i>&nbsp;  {{ title }} </h4>\r\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n          <span aria-hidden=\"true\" style=\"color: white;\">&times;</span>\r\n        </button>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n\r\n        <div class=\"container\">\r\n\r\n            <form [formGroup]=\"formProducto\">\r\n\r\n                <div class=\"row\">\r\n        \r\n                        <div class=\"col-12\">\r\n                            \r\n                                <div class=\"form-group\">\r\n                                \r\n                                    <label><strong>Codigo</strong></label>\r\n                                    <input [(ngModel)]=\"producto.idProducto\" formControlName=\"idProducto\" type=\"text\" id=\"txtIDProductoRegistro\" class=\"form-control w-25\" name=\"idProducto\" disabled=\"disabled\">\r\n                                    \r\n                                </div>\r\n                            \r\n                            </div>\r\n                        \r\n                            <div class=\"col-12\">\r\n                            \r\n                                <div class=\"form-group\">\r\n                                \r\n                                    <label><strong>Descripcion</strong></label>\r\n                                    <input [(ngModel)]=\"producto.descripcion\"   formControlName=\"descripcion\" id=\"txtDescrpcionRegistro\"  type=\"text\" placeholder=\"Ingresa una descripcion\" name=\"descripcion\" class=\"form-control\" required=\"required\">\r\n                                    <div id=\"mensajeDescripcionRegistro\" class=\"\"></div>\r\n                                </div>\r\n                            \r\n                            </div>\r\n                            \r\n                            <div class=\"col-md-12\">\r\n                            \r\n                                <div class=\"form-group\">\r\n                                \r\n                                    <label><strong>Unidad de medida</strong></label>\r\n                                    <input [(ngModel)]=\"producto.unidadDeMedida\"   formControlName=\"unidadDeMedida\" id=\"txtUnidadDeMedidaRegistro\" type=\"text\" placeholder=\"Ingresa la unidad de medida\" name=\"unidadDeMedida\" class=\"form-control\" required=\"required\">\r\n                                    <div id=\"mensajeUnidadDeMedidaRegistro\" class=\"\"></div>\r\n                                </div>\r\n                                \r\n                            \r\n                            </div>\r\n                            \r\n                            <div class=\"col-md-6\">\r\n                            \r\n                                <div class=\"form-group\">\r\n                                \r\n                                    <label><strong>Cantidad</strong> </label>\r\n                                    <input [(ngModel)]=\"producto.cantidad\"  id=\"txtCantidadRegistro\" formControlName=\"cantidad\" type=\"text\" placeholder=\"Ingresa una cantidad\" name=\"cantidad\" class=\"form-control\" required=\"required\">\r\n                                    <div id=\"mensajeCantidadRegistro\" class=\"\"></div>\r\n                                </div>\r\n                            \r\n                            </div>\r\n                            \r\n                            <div class=\"col-md-6\">\r\n                            \r\n                                <div class=\"form-group\">\r\n                                \r\n                                    <label><strong>Valor Venta</strong> </label>\r\n                                    <input [(ngModel)]=\"producto.valorVenta\"   id=\"txtVentaRegistro\" formControlName=\"valorVenta\" type=\"text\" placeholder=\"Ingresa el precio\" name=\"valorVenta\" class=\"form-control\" required=\"required\">\r\n                                    <div id=\"mensajeVentaRegistro\" class=\"\"></div>\r\n                                </div>\r\n                            \r\n                            </div>\t        \t\r\n                        \r\n                        </div>\r\n                </form>\r\n        \r\n         </div>    \r\n        \r\n    </div>\r\n          \r\n          <div class=\"modal-footer\">\r\n            <button type=\"button\" class=\"btn btn-info btn-sm\" (click)=\"modalRef.hide()\"><i class=\"fas fa-times mr-1\"></i>Cerrar</button>\r\n            <button type=\"button\" class=\"btn btn-success btn-sm\" (click)=\"guardar()\"><i class=\"fas fa-save mr-1\"></i>Guardar</button>\r\n          </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/producto/producto.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/producto/producto.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container my-4\" style=\"border: solid #D9EDF7 2px;\">\r\n\r\n\t\r\n    <div class=\"row  py-2\" style=\"background: #D9EDF7;\">\r\n        \r\n        <div class=\"col\">\r\n\r\n                <span style=\"float: left; color:#417C9A;\"> <h4><strong>Buscar Productos</strong></h4></span>\r\n                <button type=\"button\" (click)=\"ingresarProducto()\" class=\"btn btn-primary btn-sm mr-2\"  style=\"float: right;\"><i class=\"fas fa-plus\"></i> Nuevo Producto</button>\r\n        </div>\r\n\r\n    </div>\r\n\r\n\r\n    <div class=\"row pt-3\">\r\n\r\n        <div class=\"col\">\r\n\r\n                <form class=\"form-inline\" method=\"post\">\r\n                        <div class=\"form-check mr-2\">\r\n\t\t\t\t\t\t  <input class=\"form-check-input \" type=\"radio\" name=\"rbtnTipoDeBusqueda\" id=\"rbtnCodigo\" [(ngModel)]=\"busqueda\"  value=\"codigo\" >\r\n\t\t\t\t\t\t  <label class=\"form-check-label\" for=\"rbtnCodigo\">\r\n\t\t\t\t\t\t   Codigo\r\n\t\t\t\t\t\t  </label>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"form-check mr-2\">\r\n\t\t\t\t\t\t  <input class=\"form-check-input \" type=\"radio\" name=\"rbtnTipoDeBusqueda\" id=\"rbtnDenominacion\" [(ngModel)]=\"busqueda\"   value=\"denominacion\">\r\n\t\t\t\t\t\t  <label class=\"form-check-label\" for=\"rbtnDenominacion\">\r\n\t\t\t\t\t\t    Denominacion\r\n\t\t\t\t\t\t  </label>\r\n\t\t\t\t\t\t</div>\r\n                        \r\n                        <div class=\"form-group mx-sm-2 mb-2\">\r\n                          <input type=\"text\" [(ngModel)]=\"descripcionBusqueda\" name=\"txtBusquedaProductos\" class=\"form-control\"   placeholder=\"Buscar producto\">\r\n                        </div>\r\n                        <button (click)=\"buscarProducto()\" class=\"btn btn-sm btn-primary mb-2 ml-2\"><i class=\"fas fa-search\"></i> Buscar</button>\r\n                </form>\r\n\r\n        </div>\r\n    \r\n\r\n    </div>\r\n\r\n    <div class=\"row\" >\r\n\r\n       <div class=\"container mt-3\">\r\n       \r\n       <div class=\"table-responsive\" style=\"height: 350px;\">\r\n       \r\n        \t<table class=\"table table-sm  table-hover\" id=\"tblListarProductos\">\r\n                    <thead style=\"background: #D9EDF7;\">\r\n                      <tr class=\"text-center\">\r\n                          <th scope=\"col\">ID</th>\r\n                        <th scope=\"col\">Descripcion</th>\r\n                        <th scope=\"col\">U. De Medida</th>\r\n                        <th scope=\"col\">Cantidad</th>\r\n                         <th scope=\"col\">Valor venta</th>\r\n                        <th scope=\"col\"> Acciones</th>\r\n                      </tr>\r\n                    </thead>\r\n                    \r\n                    <tbody>\r\n\t                    \r\n\t                     <tr class=\"text-center\" style=\"cursor: pointer;\" (dblclick)=\"editarProductoDoubleClick(producto)\"  *ngFor='let producto of productoService.productos'>\r\n\t                     \r\n\t                        <td >{{producto.idProducto}}</td>\r\n\t                        <td >{{producto.descripcion}} </td>\r\n\t                        <td >{{producto.unidadDeMedida}} </td>\r\n\t                        <td >{{producto.cantidad}} </td>\r\n\t                        <td>{{producto.valorVenta}} </td>\r\n\t                        <td>\r\n\t                        <a hidden=\"hidden\"  class=\"btn btn-primary\">ir prueba</a>\r\n\t                        <button   data-toggle=\"modal\" data-target=\"#ModalEditarProducto\" (click)=\"editarProducto(producto)\"  name=\"btnBuscarProducto\" id=\"btnBuscarProducto\" class=\"btn btn-warning btn-sm mr-1\"><i class=\"fas fa-pen\"></i></button>\r\n\t                        <a class=\"btn btn-danger btn-sm \" (click)=\"eliminarProducto(producto)\"><i class=\"fas fa-trash-alt\"></i></a>\r\n\t                        </td>\r\n\t                      </tr>\r\n\t                    \r\n                 \r\n                   \t </tbody>\r\n             \r\n             </table>\r\n       \r\n       </div>\r\n\r\n       </div>\r\n\r\n            \r\n\r\n    </div>\r\n\r\n\t<hr>\r\n\t\r\n    <div class=\"row mb-2\" >\r\n    \r\n    <div class=\"col-4\">\r\n\r\n      <label style=\"float: left; margin-top: 10px;\"><i class=\"far fa-clone\"></i>&nbsp; Mostrando {{paginacion.primeraFila+1}} al {{paginacion.ultimaFila}} de {{paginacion.totalRegistros}}  registros</label>\r\n\r\n    </div>\r\n    <div class=\"col-3\">\r\n        <div class=\"form-row\">\r\n        \r\n            <label class=\"col-8 col-form-label text-right\">Mostrar :</label>\r\n    \r\n            <div class=\"col-4\">\r\n              <select [(ngModel)]=\"tamanioPaginado\" (change)=\"onChangeMostrar()\" class=\"form-control form-control-sm\">\r\n                <option *ngFor=\"let option of tamaniosPagina\" [ngValue]=\"option.id\">{{option.valor}}</option>\r\n              </select>\r\n            </div>\r\n\r\n        </div>\r\n        \r\n          \r\n    </div> \r\n     \r\n    <div class=\"col-5\">\r\n      <nav aria-label=\"Page navigation example\">\r\n        <ul class=\"pagination pg-blue justify-content-end\">\r\n            <li *ngFor=\"let pagina of paginado\" class={{pagina.clase}}>\r\n              <a [routerLink]=\"\" class=\"page-link\" (click)=\"gestionarPaginado(pagina)\">{{pagina.valor}}</a>\r\n            </li>\r\n        </ul>\r\n      </nav>\r\n    </div>\r\n\r\n    \r\n  <!--\r\n\r\n  <label for=\"validationServer013\">First name</label>\r\n    <input type=\"text\" class=\"{{esValidoInput}}\" id=\"validationServer013\" placeholder=\"First name\"\r\n      value=\"Mark\" required>\r\n    <div class={{esValidoInput1}}>\r\n      Looks good!\r\n    </div>\r\n\r\n  <button (click)=\"cambiarClase()\">Cambiar</button>\r\n  <button (click)=\"cambiarClase2()\">Cambiar</button>\r\n\r\n  -->  \r\n  \r\n    </div>\r\n    \r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/proveedor/proveedor.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/proveedor/proveedor.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container my-4\" style=\"border: solid #D9EDF7 2px;\">\r\n\r\n\t\r\n        <div class=\"row  py-2\" style=\"background: #D9EDF7;\">\r\n            \r\n            <div class=\"col\">\r\n    \r\n                    <span style=\"float: left; color:#417C9A;\"> <h4><strong>Buscar Proveedor</strong></h4></span>\r\n                    <button type=\"button\" (click)=\"ingresarProveedor()\" class=\"btn btn-primary btn-sm mr-2\"  style=\"float: right;\"><i class=\"fas fa-plus\"></i> Nuevo Proveedor</button>\r\n            </div>\r\n    \r\n        </div>\r\n    \r\n    \r\n        <div class=\"row pt-3\">\r\n    \r\n            <div class=\"col\">\r\n    \r\n                    <form class=\"form-inline\" method=\"post\">\r\n                            <div class=\"form-check mr-2\">\r\n                              <input class=\"form-check-input \" type=\"radio\" name=\"rbtnTipoDeBusqueda\" id=\"rbtnRuc\" value=\"ruc\" [(ngModel)]=\"busqueda\" >\r\n                              <label class=\"form-check-label\" for=\"rbtnRuc\">\r\n                               Ruc\r\n                              </label>\r\n                            </div>\r\n                            <div class=\"form-check mr-2\">\r\n                              <input class=\"form-check-input \" type=\"radio\" name=\"rbtnTipoDeBusqueda\" id=\"rbtnDenominacion\" [(ngModel)]=\"busqueda\" value=\"denominacion\">\r\n                              <label class=\"form-check-label\" for=\"rbtnDenominacion\">\r\n                                Denominacion\r\n                              </label>\r\n                            </div>\r\n                            \r\n                            <div class=\"form-group mx-sm-2 mb-2\">\r\n                              <input type=\"text\" name=\"txtBusquedaProveedor\" class=\"form-control\"   placeholder=\"Buscar proveedor\" [(ngModel)]=\"descripcionBusqueda\" >\r\n                            </div>\r\n                            <button (click)=\" buscarProveedor()\" class=\"btn btn-sm btn-primary mb-2 ml-2\"><i class=\"fas fa-search\"></i> Buscar</button>\r\n                    </form>\r\n    \r\n            </div>\r\n        \r\n    \r\n        </div>\r\n    \r\n        <div class=\"row\" >\r\n    \r\n           <div class=\"container mt-3\">\r\n           \r\n           <div class=\"table-responsive\" style=\"height: 350px;\">\r\n           \r\n                <table class=\"table table-sm  table-hover\" id=\"tblListarProductos\">\r\n                        <thead style=\"background: #D9EDF7;\">\r\n                          <tr class=\"text-center\">\r\n                                <th scope=\"col\">RUC</th>\r\n                                <th scope=\"col\">Denominacion</th>\r\n                                <th scope=\"col\">Direccion</th>\r\n                                <th scope=\"col\">Telefono</th>\r\n                                <th scope=\"col\"> Acciones</th>\r\n                          </tr>\r\n                        </thead>\r\n                        \r\n                        <tbody>\r\n                            \r\n                            <tr class=\"text-center\" style=\"cursor: pointer;\" (dblclick)=\"editarProveedorDoubleClick(proveedor)\"  *ngFor='let proveedor of proveedorService.proveedores'>\r\n\t                     \r\n                                <td >{{proveedor.ruc}}</td>\r\n                                <td >{{proveedor.denominacion}} </td>\r\n                                <td >{{proveedor.direccion}} </td>\r\n                                <td >{{proveedor.telefono}} </td>\r\n                                <td>\r\n                                <button   (click)=\"editarProveedor(proveedor)\"   class=\"btn btn-warning btn-sm mr-1\"><i class=\"fas fa-pen\"></i></button>\r\n                                <button class=\"btn btn-danger btn-sm \" (click)=\"eliminarProveedor(proveedor)\"><i class=\"fas fa-trash-alt\"></i></button>\r\n                                </td>\r\n                            </tr>\r\n                     \r\n                        </tbody>\r\n                 \r\n                 </table>\r\n           \r\n           </div>\r\n    \r\n           </div>\r\n    \r\n                \r\n    \r\n        </div>\r\n    \r\n        <hr>\r\n        \r\n        <div class=\"row mb-2\" >\r\n        \r\n        <div class=\"col-12\">\r\n          <span style=\"float: left; margin-top: 10px;\"><i class=\"far fa-hand-pointer\"></i> Has doble click en la fila para editar</span>                      \r\n        \r\n          <nav aria-label=\"Page navigation example\">\r\n                <ul class=\"pagination pg-blue justify-content-end\">\r\n                  <li class=\"page-item disabled\">\r\n                    <a class=\"page-link\" tabindex=\"-1\">Previous</a>\r\n                  </li>\r\n                  <li class=\"page-item\"><a class=\"page-link\">1</a></li>\r\n                  <li class=\"page-item\"><a class=\"page-link\">2</a></li>\r\n                  <li class=\"page-item\"><a class=\"page-link\">3</a></li>\r\n                  <li class=\"page-item\">\r\n                    <a class=\"page-link\">Next</a>\r\n                  </li>\r\n                </ul>\r\n              </nav>\r\n    \r\n        </div>\r\n        \r\n          \r\n        </div>\r\n        \r\n    </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/usuario/usuario.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/usuario/usuario.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container my-4\" style=\"border: solid #D9EDF7 2px;\">\r\n\r\n\t\r\n    <div class=\"row  py-2\" style=\"background: #D9EDF7;\">\r\n        \r\n        <div class=\"col\">\r\n\r\n                <span style=\"float: left; color:#417C9A;\"> <h4><strong>Buscar Usuario</strong></h4></span>\r\n                <button type=\"button\" (click)=\"ingresarUsuario()\" class=\"btn btn-primary btn-sm mr-2\"  style=\"float: right;\"><i class=\"fas fa-plus\"></i> Nuevo Usuario</button>\r\n        </div>\r\n\r\n    </div>\r\n\r\n\r\n    <div class=\"row pt-3\">\r\n\r\n        <div class=\"col\">\r\n\r\n                <form class=\"form-inline\" method=\"post\">\r\n                        <div class=\"form-check mr-2\">\r\n\t\t\t\t\t\t  <input class=\"form-check-input \" type=\"radio\" name=\"rbtnTipoDeBusqueda\" id=\"rbtnCodigo\" [(ngModel)]=\"busqueda\"  value=\"ID\" >\r\n\t\t\t\t\t\t  <label class=\"form-check-label\" for=\"rbtnCodigo\">\r\n\t\t\t\t\t\t   ID\r\n\t\t\t\t\t\t  </label>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"form-check mr-2\">\r\n\t\t\t\t\t\t  <input class=\"form-check-input \" type=\"radio\" name=\"rbtnTipoDeBusqueda\" id=\"rbtnDenominacion\" [(ngModel)]=\"busqueda\"   value=\"apellido\">\r\n\t\t\t\t\t\t  <label class=\"form-check-label\" for=\"rbtnDenominacion\">\r\n\t\t\t\t\t\t    Apellido\r\n\t\t\t\t\t\t  </label>\r\n\t\t\t\t\t\t</div>\r\n                        \r\n                        <div class=\"form-group mx-sm-2 mb-2\">\r\n                          <input type=\"text\" [(ngModel)]=\"descripcionBusqueda\" name=\"txtBusquedaProductos\" class=\"form-control\"   placeholder=\"Buscar producto\">\r\n                        </div>\r\n                        <button (click)=\"buscarUsuario()\" class=\"btn btn-sm btn-primary mb-2 ml-2\"><i class=\"fas fa-search\"></i> Buscar</button>\r\n                </form>\r\n\r\n        </div>\r\n    \r\n\r\n    </div>\r\n\r\n    <div class=\"row\" >\r\n\r\n       <div class=\"container mt-3\">\r\n       \r\n       <div class=\"table-responsive\" style=\"height: 350px;\">\r\n       \r\n        \t<table class=\"table table-sm  table-hover\" id=\"tblListarUsuarios\">\r\n                    <thead style=\"background: #D9EDF7;\">\r\n                      <tr class=\"text-center\">\r\n                          <th scope=\"col\">ID</th>\r\n                        <th scope=\"col\">DNI</th>\r\n                        <th scope=\"col\">Apellidos</th>\r\n                        <th scope=\"col\">Nombres</th>\r\n                         <th scope=\"col\">Usuario</th>\r\n                        <th scope=\"col\"> Acciones</th>\r\n                      </tr>\r\n                    </thead>\r\n                    \r\n                    <tbody>\r\n\t                    \r\n\t                     <tr class=\"text-center\" style=\"cursor: pointer;\" (dblclick)=\"editarUsuarioDoubleClick(usuario)\"  *ngFor='let usuario of usuarioService.usuarios'>\r\n\t                     \r\n\t                        <td >{{usuario.idUsuario}}</td>\r\n\t                        <td >{{usuario.persona.dni}} </td>\r\n\t                        <td >{{usuario.persona.apellidos}} </td>\r\n\t                        <td >{{usuario.persona.nombres}} </td>\r\n\t                        <td> {{usuario.nombreUsuario}} </td>\r\n\t                        <td>\r\n\t                        <a hidden=\"hidden\"  class=\"btn btn-primary\">ir prueba</a>\r\n\t                        <button   data-toggle=\"modal\" data-target=\"#ModalEditarProducto\" (click)=\"editarUsuario(usuario)\"  name=\"btnBuscarProducto\" id=\"btnBuscarProducto\" class=\"btn btn-warning btn-sm mr-1\"><i class=\"fas fa-pen\"></i></button>\r\n\t                        <a class=\"btn btn-danger btn-sm \" (click)=\"eliminarUsuario(usuario)\"><i class=\"fas fa-trash-alt\"></i></a>\r\n\t                        </td>\r\n\t                      </tr>\r\n\t                    \r\n                 \r\n                   \t </tbody>\r\n             \r\n             </table>\r\n       \r\n       </div>\r\n\r\n       </div>\r\n\r\n            \r\n\r\n    </div>\r\n\r\n\t<hr>\r\n\t\r\n    <div class=\"row mb-2\" >\r\n    \r\n    <div class=\"col-12\">\r\n      <span style=\"float: left; margin-top: 10px;\"><i class=\"far fa-hand-pointer\"></i> Has doble click en la fila para editar</span>                      \r\n    \r\n      <nav aria-label=\"Page navigation example\">\r\n            <ul class=\"pagination pg-blue justify-content-end\">\r\n              <li class=\"page-item disabled\">\r\n                <a class=\"page-link\" tabindex=\"-1\">Previous</a>\r\n              </li>\r\n              <li class=\"page-item\"><a class=\"page-link\">1</a></li>\r\n              <li class=\"page-item\"><a class=\"page-link\">2</a></li>\r\n              <li class=\"page-item\"><a class=\"page-link\">3</a></li>\r\n              <li class=\"page-item\">\r\n                <a class=\"page-link\">Next</a>\r\n              </li>\r\n            </ul>\r\n          </nav>\r\n\r\n    </div>\r\n  <!--\r\n\r\n  <label for=\"validationServer013\">First name</label>\r\n    <input type=\"text\" class=\"{{esValidoInput}}\" id=\"validationServer013\" placeholder=\"First name\"\r\n      value=\"Mark\" required>\r\n    <div class={{esValidoInput1}}>\r\n      Looks good!\r\n    </div>\r\n\r\n  <button (click)=\"cambiarClase()\">Cambiar</button>\r\n  <button (click)=\"cambiarClase2()\">Cambiar</button>\r\n\r\n  -->  \r\n  \r\n    </div>\r\n    \r\n</div>"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_producto_producto_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/producto/producto.component */ "./src/app/components/producto/producto.component.ts");
/* harmony import */ var _components_proveedor_proveedor_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/proveedor/proveedor.component */ "./src/app/components/proveedor/proveedor.component.ts");
/* harmony import */ var _components_usuario_usuario_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/usuario/usuario.component */ "./src/app/components/usuario/usuario.component.ts");
/* harmony import */ var _components_Compra_listar_listar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/Compra/listar/listar.component */ "./src/app/components/Compra/listar/listar.component.ts");
/* harmony import */ var _components_Compra_ingresar_ingresar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/Compra/ingresar/ingresar.component */ "./src/app/components/Compra/ingresar/ingresar.component.ts");
/* harmony import */ var _components_inventario_inventario_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/inventario/inventario.component */ "./src/app/components/inventario/inventario.component.ts");
/* harmony import */ var _components_kardex_kardex_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/kardex/kardex.component */ "./src/app/components/kardex/kardex.component.ts");










const routes = [
    { path: 'producto', component: _components_producto_producto_component__WEBPACK_IMPORTED_MODULE_3__["ProductoComponent"] },
    { path: 'proveedor', component: _components_proveedor_proveedor_component__WEBPACK_IMPORTED_MODULE_4__["ProveedorComponent"] },
    { path: 'usuario', component: _components_usuario_usuario_component__WEBPACK_IMPORTED_MODULE_5__["UsuarioComponent"] },
    { path: 'compra', component: _components_Compra_listar_listar_component__WEBPACK_IMPORTED_MODULE_6__["ListarComponent"] },
    { path: 'compra/listar', component: _components_Compra_ingresar_ingresar_component__WEBPACK_IMPORTED_MODULE_7__["IngresarComponent"] },
    { path: 'inventario', component: _components_inventario_inventario_component__WEBPACK_IMPORTED_MODULE_8__["InventarioComponent"] },
    { path: 'kardex', component: _components_kardex_kardex_component__WEBPACK_IMPORTED_MODULE_9__["KardexComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'MaconsaFront';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_producto_producto_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/producto/producto.component */ "./src/app/components/producto/producto.component.ts");
/* harmony import */ var _components_proveedor_proveedor_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/proveedor/proveedor.component */ "./src/app/components/proveedor/proveedor.component.ts");
/* harmony import */ var _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/modal/modal.component */ "./src/app/components/modal/modal.component.ts");
/* harmony import */ var _components_usuario_usuario_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/usuario/usuario.component */ "./src/app/components/usuario/usuario.component.ts");
/* harmony import */ var _service_producto_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./service/producto.service */ "./src/app/service/producto.service.ts");
/* harmony import */ var _service_proveedor_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./service/proveedor.service */ "./src/app/service/proveedor.service.ts");
/* harmony import */ var _service_usuario_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./service/usuario.service */ "./src/app/service/usuario.service.ts");
/* harmony import */ var _service_compra_service_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./service/compra-service.service */ "./src/app/service/compra-service.service.ts");
/* harmony import */ var _service_venta_service_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./service/venta-service.service */ "./src/app/service/venta-service.service.ts");
/* harmony import */ var _components_modal_proveedor_modal_proveedor_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/modal-proveedor/modal-proveedor.component */ "./src/app/components/modal-proveedor/modal-proveedor.component.ts");
/* harmony import */ var _components_modal_usuario_modal_usuario_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/modal-usuario/modal-usuario.component */ "./src/app/components/modal-usuario/modal-usuario.component.ts");
/* harmony import */ var _components_Compra_listar_listar_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/Compra/listar/listar.component */ "./src/app/components/Compra/listar/listar.component.ts");
/* harmony import */ var _components_Compra_ingresar_ingresar_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/Compra/ingresar/ingresar.component */ "./src/app/components/Compra/ingresar/ingresar.component.ts");
/* harmony import */ var _components_inventario_inventario_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/inventario/inventario.component */ "./src/app/components/inventario/inventario.component.ts");
/* harmony import */ var _components_kardex_kardex_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/kardex/kardex.component */ "./src/app/components/kardex/kardex.component.ts");
/* harmony import */ var _components_modal_detalle_compra_modal_detalle_compra_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/modal-detalle-compra/modal-detalle-compra.component */ "./src/app/components/modal-detalle-compra/modal-detalle-compra.component.ts");
/* harmony import */ var _components_modal_listar_productos_modal_listar_productos_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/modal-listar-productos/modal-listar-productos.component */ "./src/app/components/modal-listar-productos/modal-listar-productos.component.ts");
/* harmony import */ var _components_modal_listar_proveedor_modal_listar_proveedor_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/modal-listar-proveedor/modal-listar-proveedor.component */ "./src/app/components/modal-listar-proveedor/modal-listar-proveedor.component.ts");



























let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
            _components_producto_producto_component__WEBPACK_IMPORTED_MODULE_8__["ProductoComponent"],
            _components_proveedor_proveedor_component__WEBPACK_IMPORTED_MODULE_9__["ProveedorComponent"],
            _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_10__["ModalComponent"],
            _components_usuario_usuario_component__WEBPACK_IMPORTED_MODULE_11__["UsuarioComponent"],
            _components_modal_proveedor_modal_proveedor_component__WEBPACK_IMPORTED_MODULE_17__["ModalProveedorComponent"],
            _components_modal_usuario_modal_usuario_component__WEBPACK_IMPORTED_MODULE_18__["ModalUsuarioComponent"],
            _components_Compra_listar_listar_component__WEBPACK_IMPORTED_MODULE_19__["ListarComponent"],
            _components_Compra_ingresar_ingresar_component__WEBPACK_IMPORTED_MODULE_20__["IngresarComponent"],
            _components_inventario_inventario_component__WEBPACK_IMPORTED_MODULE_21__["InventarioComponent"],
            _components_kardex_kardex_component__WEBPACK_IMPORTED_MODULE_22__["KardexComponent"],
            _components_modal_detalle_compra_modal_detalle_compra_component__WEBPACK_IMPORTED_MODULE_23__["ModalDetalleCompraComponent"],
            _components_modal_listar_productos_modal_listar_productos_component__WEBPACK_IMPORTED_MODULE_24__["ModalListarProductosComponent"],
            _components_modal_listar_proveedor_modal_listar_proveedor_component__WEBPACK_IMPORTED_MODULE_25__["ModalListarProveedorComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["ModalModule"].forRoot()
        ],
        providers: [_service_producto_service__WEBPACK_IMPORTED_MODULE_12__["ProductoService"], _service_proveedor_service__WEBPACK_IMPORTED_MODULE_13__["ProveedorService"], _service_usuario_service__WEBPACK_IMPORTED_MODULE_14__["UsuarioService"], _service_compra_service_service__WEBPACK_IMPORTED_MODULE_15__["CompraServiceService"], _service_venta_service_service__WEBPACK_IMPORTED_MODULE_16__["VentaServiceService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
        entryComponents: [_components_modal_modal_component__WEBPACK_IMPORTED_MODULE_10__["ModalComponent"], _components_modal_proveedor_modal_proveedor_component__WEBPACK_IMPORTED_MODULE_17__["ModalProveedorComponent"], _components_modal_usuario_modal_usuario_component__WEBPACK_IMPORTED_MODULE_18__["ModalUsuarioComponent"], _components_modal_detalle_compra_modal_detalle_compra_component__WEBPACK_IMPORTED_MODULE_23__["ModalDetalleCompraComponent"], _components_modal_listar_productos_modal_listar_productos_component__WEBPACK_IMPORTED_MODULE_24__["ModalListarProductosComponent"],
            _components_modal_listar_proveedor_modal_listar_proveedor_component__WEBPACK_IMPORTED_MODULE_25__["ModalListarProveedorComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/Compra/ingresar/ingresar.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/components/Compra/ingresar/ingresar.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvQ29tcHJhL2luZ3Jlc2FyL2luZ3Jlc2FyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/Compra/ingresar/ingresar.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/Compra/ingresar/ingresar.component.ts ***!
  \******************************************************************/
/*! exports provided: IngresarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IngresarComponent", function() { return IngresarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _models_compra_compra_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../models/compra/compra.module */ "./src/app/models/compra/compra.module.ts");
/* harmony import */ var _modal_listar_productos_modal_listar_productos_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../modal-listar-productos/modal-listar-productos.component */ "./src/app/components/modal-listar-productos/modal-listar-productos.component.ts");
/* harmony import */ var _modal_listar_proveedor_modal_listar_proveedor_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../modal-listar-proveedor/modal-listar-proveedor.component */ "./src/app/components/modal-listar-proveedor/modal-listar-proveedor.component.ts");
/* harmony import */ var _models_producto_producto_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../models/producto/producto.module */ "./src/app/models/producto/producto.module.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _service_compra_service_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../service/compra-service.service */ "./src/app/service/compra-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_models_detalle_comprobante_de_pago_detalle_comprobante_de_pago_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/models/detalle-comprobante-de-pago/detalle-comprobante-de-pago.module */ "./src/app/models/detalle-comprobante-de-pago/detalle-comprobante-de-pago.module.ts");











let IngresarComponent = class IngresarComponent {
    constructor(modalService, compraService, router) {
        this.modalService = modalService;
        this.compraService = compraService;
        this.router = router;
        this.selectedProduct = false;
        this.cantidad = 0;
        this.precioCompra = 0;
        this.totalSinIgv = 0;
        this.compra = new _models_compra_compra_module__WEBPACK_IMPORTED_MODULE_2__["CompraModule"]();
    }
    ngOnInit() {
        this.producto = new _models_producto_producto_module__WEBPACK_IMPORTED_MODULE_5__["ProductoModule"]();
        this.compra = new _models_compra_compra_module__WEBPACK_IMPORTED_MODULE_2__["CompraModule"]();
        this.listarCarrito();
    }
    disable() {
        this.btnAgregarProductos.nativeElement.disabled = false;
    }
    enable() {
        this.btnAgregarProductos.nativeElement.disabled = true;
    }
    listarCarrito() {
        this.compraService.listarCarrito().subscribe(res => {
            this.compra.comprobanteDePago.detalleComprobanteDePago = res;
            this.calcularTotalSinIGV(this.compra.comprobanteDePago.detalleComprobanteDePago);
            console.log(res);
        });
    }
    listaDeProveedores() {
        this.modalRef = this.modalService.show(_modal_listar_proveedor_modal_listar_proveedor_component__WEBPACK_IMPORTED_MODULE_4__["ModalListarProveedorComponent"], {
            initialState: {
                title: 'Proveedores',
                ingresarCompraComponent: this
            }, class: "modal-lg"
        });
    }
    listaDeProductos() {
        this.modalRef = this.modalService.show(_modal_listar_productos_modal_listar_productos_component__WEBPACK_IMPORTED_MODULE_3__["ModalListarProductosComponent"], {
            initialState: {
                title: 'Productos',
                ingresarCompraComponent: this
            }, class: "modal-lg"
        });
    }
    agregarProductoCarrito() {
        //console.log(this.producto);
        this.detalleComprobanteDePago = new src_app_models_detalle_comprobante_de_pago_detalle_comprobante_de_pago_module__WEBPACK_IMPORTED_MODULE_10__["DetalleComprobanteDePagoModule"]();
        this.detalleComprobanteDePago.producto = this.producto;
        this.detalleComprobanteDePago.cantidadCompra = this.cantidad;
        this.detalleComprobanteDePago.valorVenta = this.precioCompra;
        this.detalleComprobanteDePago.subtotal = this.cantidad * this.precioCompra;
        this.cantidad = 0;
        this.precioCompra = 0;
        this.selectedProduct = false;
        // this.txtDescripcionProducto.nativeElement.value="";
        //this.txtUnidadDeMedida.nativeElement.value="";
        this.compraService.agregarDetalleComprobante(this.detalleComprobanteDePago).subscribe(res => {
            // console.log(res);
            this.listarCarrito();
        });
        this.producto = new _models_producto_producto_module__WEBPACK_IMPORTED_MODULE_5__["ProductoModule"]();
    }
    calcularTotalSinIGV(detallesComprobanteDePago) {
        this.totalSinIgv = 0;
        detallesComprobanteDePago.forEach(element => {
            this.totalSinIgv += element.subtotal;
        });
    }
    editarDetalleComprobante(detalleComprobanteDePago) {
        //console.log(detalleComprobanteDePago.producto);
        this.producto = detalleComprobanteDePago.producto;
        this.precioCompra = detalleComprobanteDePago.valorVenta;
        this.cantidad = detalleComprobanteDePago.cantidadCompra;
        this.selectedProduct = true;
        //Swal.fire('Exito', 'Editado Correctamente!', 'success'); 
    }
    eliminarDetalleComprobante(detalleComprobanteDePago) {
        console.log(detalleComprobanteDePago);
        sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
            title: '¿Deseas remover este producto?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Si, eliminar',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.value) {
                this.compraService.eliminarDetalleComprobante(detalleComprobanteDePago).subscribe(res => {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire('Eliminado!', 'El registro ha sido removido correctamente.', 'success');
                    //console.log(res);
                    this.listarCarrito();
                    this.producto = new _models_producto_producto_module__WEBPACK_IMPORTED_MODULE_5__["ProductoModule"]();
                    this.precioCompra = 0;
                    this.cantidad = 0;
                });
            }
        });
    }
    guardarCompra() {
        console.log(this.compra);
        if (this.compra.comprobanteDePago.numero != null && this.compra.comprobanteDePago.serie != null
            && this.compra.comprobanteDePago.detalleComprobanteDePago.length > 0 && this.compra.proveedor.ruc != null) {
            this.compraService.guardarCompra(this.compra).subscribe(res => {
                console.log(res);
                sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
                    type: 'success',
                    title: 'Compra Guardada Correctamente',
                    showConfirmButton: true,
                    timer: 1500
                });
                setTimeout(() => {
                    this.router.navigate(['/compra']);
                }, 1500);
            });
            //Swal.fire('Exito', 'Compra Guardada Correctamente!', 'success'); 
        }
        else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire('Error', 'Debes completar el registro para continuar. Verifique por favor. ', 'error');
        }
    }
};
IngresarComponent.ctorParameters = () => [
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__["BsModalService"] },
    { type: _service_compra_service_service__WEBPACK_IMPORTED_MODULE_8__["CompraServiceService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("btnAgregarProductos", { static: false })
], IngresarComponent.prototype, "btnAgregarProductos", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("txtDescripcionProducto", { static: false })
], IngresarComponent.prototype, "txtDescripcionProducto", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("txtUnidadDeMedida", { static: false })
], IngresarComponent.prototype, "txtUnidadDeMedida", void 0);
IngresarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ingresar',
        template: __webpack_require__(/*! raw-loader!./ingresar.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/Compra/ingresar/ingresar.component.html"),
        styles: [__webpack_require__(/*! ./ingresar.component.css */ "./src/app/components/Compra/ingresar/ingresar.component.css")]
    })
], IngresarComponent);



/***/ }),

/***/ "./src/app/components/Compra/listar/listar.component.css":
/*!***************************************************************!*\
  !*** ./src/app/components/Compra/listar/listar.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvQ29tcHJhL2xpc3Rhci9saXN0YXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/Compra/listar/listar.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/Compra/listar/listar.component.ts ***!
  \**************************************************************/
/*! exports provided: ListarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListarComponent", function() { return ListarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_compra_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../service/compra-service.service */ "./src/app/service/compra-service.service.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js");
/* harmony import */ var _modal_detalle_compra_modal_detalle_compra_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../modal-detalle-compra/modal-detalle-compra.component */ "./src/app/components/modal-detalle-compra/modal-detalle-compra.component.ts");





let ListarComponent = class ListarComponent {
    constructor(compraService, modalService) {
        this.compraService = compraService;
        this.modalService = modalService;
    }
    ngOnInit() {
        this.listarCompra();
    }
    listarCompra() {
        this.compraService.listarCompra()
            .subscribe(res => {
            this.compraService.compras = res;
            this.compraService.compras.forEach(element => {
                element.fecha = new Date(element.fecha);
                console.log(new Date(element.fecha));
            });
        });
    }
    detalleCompra(compra) {
        console.log(compra);
        this.modalRef = this.modalService.show(_modal_detalle_compra_modal_detalle_compra_component__WEBPACK_IMPORTED_MODULE_4__["ModalDetalleCompraComponent"], {
            initialState: {
                title: 'Detalle Compra'
            }, class: "modal-xl"
        });
    }
    detalleCompraDoubleClick(compra) {
        this.modalRef = this.modalService.show(_modal_detalle_compra_modal_detalle_compra_component__WEBPACK_IMPORTED_MODULE_4__["ModalDetalleCompraComponent"], {
            initialState: {
                title: 'Detalle Compra'
            }, class: "modal-xl"
        });
    }
};
ListarComponent.ctorParameters = () => [
    { type: _service_compra_service_service__WEBPACK_IMPORTED_MODULE_2__["CompraServiceService"] },
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"] }
];
ListarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-listar',
        template: __webpack_require__(/*! raw-loader!./listar.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/Compra/listar/listar.component.html"),
        styles: [__webpack_require__(/*! ./listar.component.css */ "./src/app/components/Compra/listar/listar.component.css")]
    })
], ListarComponent);



/***/ }),

/***/ "./src/app/components/inventario/inventario.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/inventario/inventario.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaW52ZW50YXJpby9pbnZlbnRhcmlvLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/inventario/inventario.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/inventario/inventario.component.ts ***!
  \***************************************************************/
/*! exports provided: InventarioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventarioComponent", function() { return InventarioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_inventario_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/inventario-service.service */ "./src/app/service/inventario-service.service.ts");



let InventarioComponent = class InventarioComponent {
    constructor(inventarioService) {
        this.inventarioService = inventarioService;
    }
    ngOnInit() {
        this.inventario();
    }
    inventario() {
        this.inventarioService.productosInventario()
            .subscribe(res => {
            this.inventarioService.listaProductosInventario = res;
            console.log(res);
        });
        this.inventarioService.costoInventario()
            .subscribe(res => {
            this.costoInventario = res;
            console.log(res);
        });
        this.inventarioService.totalProductos()
            .subscribe(res => {
            this.totalProductosInventario = res;
            console.log(res);
        });
    }
};
InventarioComponent.ctorParameters = () => [
    { type: _service_inventario_service_service__WEBPACK_IMPORTED_MODULE_2__["InventarioServiceService"] }
];
InventarioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-inventario',
        template: __webpack_require__(/*! raw-loader!./inventario.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/inventario/inventario.component.html"),
        styles: [__webpack_require__(/*! ./inventario.component.css */ "./src/app/components/inventario/inventario.component.css")]
    })
], InventarioComponent);



/***/ }),

/***/ "./src/app/components/kardex/kardex.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/kardex/kardex.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMva2FyZGV4L2thcmRleC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/kardex/kardex.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/kardex/kardex.component.ts ***!
  \*******************************************************/
/*! exports provided: KardexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KardexComponent", function() { return KardexComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let KardexComponent = class KardexComponent {
    constructor() { }
    ngOnInit() {
    }
};
KardexComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-kardex',
        template: __webpack_require__(/*! raw-loader!./kardex.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/kardex/kardex.component.html"),
        styles: [__webpack_require__(/*! ./kardex.component.css */ "./src/app/components/kardex/kardex.component.css")]
    })
], KardexComponent);



/***/ }),

/***/ "./src/app/components/modal-detalle-compra/modal-detalle-compra.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/components/modal-detalle-compra/modal-detalle-compra.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbW9kYWwtZGV0YWxsZS1jb21wcmEvbW9kYWwtZGV0YWxsZS1jb21wcmEuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/modal-detalle-compra/modal-detalle-compra.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/components/modal-detalle-compra/modal-detalle-compra.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ModalDetalleCompraComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalDetalleCompraComponent", function() { return ModalDetalleCompraComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _service_compra_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/compra-service.service */ "./src/app/service/compra-service.service.ts");






let ModalDetalleCompraComponent = class ModalDetalleCompraComponent {
    constructor(formBuilder, modalRef, compraService) {
        this.formBuilder = formBuilder;
        this.modalRef = modalRef;
        this.compraService = compraService;
        this.editar = false;
    }
    ngOnInit() {
        this.formCompra = this.formBuilder.group({
            idCompra: [''],
            fecha: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            estado: {
                idEstado: '1'
            },
            proveedor: {
                ruc: ''
            },
            comprobanteDePago: {
                idComprobanteDePago: ''
            },
            usuario: {
                idUsuario: ''
            }
        });
    }
    guardar() {
        console.log(this.formCompra.value);
        if (this.formCompra.valid) {
            this.compraService.ingresarCompra(this.formCompra.value).subscribe(res => {
                this.formCompra.reset();
                if (this.editar) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Exito', 'Compra Editada Correctamente!', 'success');
                }
                else {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Exito', 'Compra Registrada Correctamente!', 'success');
                }
                this.modalRef.hide();
                this.listarComponent.listarCompra();
            });
        }
        else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Error', 'Debes completar el formulario. Verifique por favor.', 'error');
        }
    }
};
ModalDetalleCompraComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalRef"] },
    { type: _service_compra_service_service__WEBPACK_IMPORTED_MODULE_5__["CompraServiceService"] }
];
ModalDetalleCompraComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-modal-detalle-compra',
        template: __webpack_require__(/*! raw-loader!./modal-detalle-compra.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/modal-detalle-compra/modal-detalle-compra.component.html"),
        styles: [__webpack_require__(/*! ./modal-detalle-compra.component.css */ "./src/app/components/modal-detalle-compra/modal-detalle-compra.component.css")]
    })
], ModalDetalleCompraComponent);



/***/ }),

/***/ "./src/app/components/modal-listar-productos/modal-listar-productos.component.css":
/*!****************************************************************************************!*\
  !*** ./src/app/components/modal-listar-productos/modal-listar-productos.component.css ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbW9kYWwtbGlzdGFyLXByb2R1Y3Rvcy9tb2RhbC1saXN0YXItcHJvZHVjdG9zLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/modal-listar-productos/modal-listar-productos.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/components/modal-listar-productos/modal-listar-productos.component.ts ***!
  \***************************************************************************************/
/*! exports provided: ModalListarProductosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalListarProductosComponent", function() { return ModalListarProductosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js");
/* harmony import */ var _service_producto_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/producto.service */ "./src/app/service/producto.service.ts");




let ModalListarProductosComponent = class ModalListarProductosComponent {
    constructor(modalRef, productoService) {
        this.modalRef = modalRef;
        this.productoService = productoService;
    }
    ngOnInit() {
        this.listarProductos();
    }
    listarProductos() {
        this.productoService.listarProducto()
            .subscribe(res => {
            this.productoService.productos = res;
            console.log(res);
        });
    }
    seleccionarProductoDoubleClick(producto) {
        this.ingresarCompraComponent.producto = producto;
        this.ingresarCompraComponent.selectedProduct = true;
        this.modalRef.hide();
    }
    seleccionarProducto(producto) {
        this.ingresarCompraComponent.producto = producto;
        this.ingresarCompraComponent.selectedProduct = true;
        this.modalRef.hide();
    }
};
ModalListarProductosComponent.ctorParameters = () => [
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalRef"] },
    { type: _service_producto_service__WEBPACK_IMPORTED_MODULE_3__["ProductoService"] }
];
ModalListarProductosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-modal-listar-productos',
        template: __webpack_require__(/*! raw-loader!./modal-listar-productos.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/modal-listar-productos/modal-listar-productos.component.html"),
        styles: [__webpack_require__(/*! ./modal-listar-productos.component.css */ "./src/app/components/modal-listar-productos/modal-listar-productos.component.css")]
    })
], ModalListarProductosComponent);



/***/ }),

/***/ "./src/app/components/modal-listar-proveedor/modal-listar-proveedor.component.css":
/*!****************************************************************************************!*\
  !*** ./src/app/components/modal-listar-proveedor/modal-listar-proveedor.component.css ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbW9kYWwtbGlzdGFyLXByb3ZlZWRvci9tb2RhbC1saXN0YXItcHJvdmVlZG9yLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/modal-listar-proveedor/modal-listar-proveedor.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/components/modal-listar-proveedor/modal-listar-proveedor.component.ts ***!
  \***************************************************************************************/
/*! exports provided: ModalListarProveedorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalListarProveedorComponent", function() { return ModalListarProveedorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js");
/* harmony import */ var _service_proveedor_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/proveedor.service */ "./src/app/service/proveedor.service.ts");




let ModalListarProveedorComponent = class ModalListarProveedorComponent {
    constructor(modalRef, proveedorService) {
        this.modalRef = modalRef;
        this.proveedorService = proveedorService;
    }
    ngOnInit() {
        this.listarProveedor();
    }
    listarProveedor() {
        this.proveedorService.listarProveedor()
            .subscribe(res => {
            this.proveedorService.proveedores = res;
            console.log(res);
        });
    }
    seleccionarProveedor(proveedor) {
        this.ingresarCompraComponent.compra.proveedor = proveedor;
        this.modalRef.hide();
    }
    seleccionarProveedorDoubleClick(proveedor) {
        this.ingresarCompraComponent.compra.proveedor = proveedor;
        this.modalRef.hide();
    }
};
ModalListarProveedorComponent.ctorParameters = () => [
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalRef"] },
    { type: _service_proveedor_service__WEBPACK_IMPORTED_MODULE_3__["ProveedorService"] }
];
ModalListarProveedorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-modal-listar-proveedor',
        template: __webpack_require__(/*! raw-loader!./modal-listar-proveedor.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/modal-listar-proveedor/modal-listar-proveedor.component.html"),
        styles: [__webpack_require__(/*! ./modal-listar-proveedor.component.css */ "./src/app/components/modal-listar-proveedor/modal-listar-proveedor.component.css")]
    })
], ModalListarProveedorComponent);



/***/ }),

/***/ "./src/app/components/modal-proveedor/modal-proveedor.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/modal-proveedor/modal-proveedor.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbW9kYWwtcHJvdmVlZG9yL21vZGFsLXByb3ZlZWRvci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/modal-proveedor/modal-proveedor.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/modal-proveedor/modal-proveedor.component.ts ***!
  \*************************************************************************/
/*! exports provided: ModalProveedorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalProveedorComponent", function() { return ModalProveedorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _service_proveedor_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/proveedor.service */ "./src/app/service/proveedor.service.ts");
/* harmony import */ var _models_proveedor_proveedor_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models/proveedor/proveedor.module */ "./src/app/models/proveedor/proveedor.module.ts");







let ModalProveedorComponent = class ModalProveedorComponent {
    constructor(formBuilder, modalRef, proveedorService) {
        this.formBuilder = formBuilder;
        this.modalRef = modalRef;
        this.proveedorService = proveedorService;
        this.editar = false;
        this.proveedor = new _models_proveedor_proveedor_module__WEBPACK_IMPORTED_MODULE_6__["ProveedorModule"]();
    }
    ngOnInit() {
        this.formProveedor = this.formBuilder.group({
            ruc: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            denominacion: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            direccion: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            telefono: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            estado: {
                idEstado: 1
            }
        });
    }
    guardar() {
        console.log(this.formProveedor.value);
        if (this.formProveedor.valid) {
            this.proveedorService.ingresarProveedor(this.formProveedor.value).subscribe(res => {
                this.formProveedor.reset();
                if (this.editar) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Exito', 'Proveedor Editado Correctamente!', 'success');
                }
                else {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Exito', 'Proveedor Registrado Correctamente!', 'success');
                }
                // this.productoComponent.listarProductos();
                this.modalRef.hide();
                this.proveedorComponent.listarProveedor();
            });
        }
        else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Error', 'Debes completar el formulario. Verifique por favor.', 'error');
        }
    }
};
ModalProveedorComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalRef"] },
    { type: _service_proveedor_service__WEBPACK_IMPORTED_MODULE_5__["ProveedorService"] }
];
ModalProveedorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-modal-proveedor',
        template: __webpack_require__(/*! raw-loader!./modal-proveedor.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/modal-proveedor/modal-proveedor.component.html"),
        styles: [__webpack_require__(/*! ./modal-proveedor.component.css */ "./src/app/components/modal-proveedor/modal-proveedor.component.css")]
    })
], ModalProveedorComponent);



/***/ }),

/***/ "./src/app/components/modal-usuario/modal-usuario.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/modal-usuario/modal-usuario.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbW9kYWwtdXN1YXJpby9tb2RhbC11c3VhcmlvLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/modal-usuario/modal-usuario.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/modal-usuario/modal-usuario.component.ts ***!
  \*********************************************************************/
/*! exports provided: ModalUsuarioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalUsuarioComponent", function() { return ModalUsuarioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _models_usuario_usuario_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/usuario/usuario.module */ "./src/app/models/usuario/usuario.module.ts");
/* harmony import */ var _service_usuario_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../service/usuario.service */ "./src/app/service/usuario.service.ts");
/* harmony import */ var src_app_models_persona_persona_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/models/persona/persona.module */ "./src/app/models/persona/persona.module.ts");








let ModalUsuarioComponent = class ModalUsuarioComponent {
    constructor(formBuilder, modalRef, usuarioService) {
        this.formBuilder = formBuilder;
        this.modalRef = modalRef;
        this.usuarioService = usuarioService;
        this.editar = false;
        this.usuario = new _models_usuario_usuario_module__WEBPACK_IMPORTED_MODULE_5__["UsuarioModule"]();
        this.usuario.persona = new src_app_models_persona_persona_module__WEBPACK_IMPORTED_MODULE_7__["PersonaModule"]();
    }
    ngOnInit() {
        this.formUsuarioPersona = this.formBuilder.group({});
        this.formUsuario = this.formBuilder.group({
            idUsuario: [''],
            nombreUsuario: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            rutaDeAlmacenamientoReportes: [''],
            persona: this.formBuilder.group({
                dni: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                nombres: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                apellidos: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                telefono: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                imagen: ['']
            }),
            estado: {
                idEstado: '1'
            }
        });
    }
    guardar() {
        console.log(this.formUsuario.value);
        if (this.formUsuario.valid) {
            this.usuarioService.ingresarUsuario(this.formUsuario.value).subscribe(res => {
                this.formUsuario.reset();
                if (this.editar) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Exito', 'Usuario Editado Correctamente!', 'success');
                }
                else {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Exito', 'Usuario Registrado Correctamente!', 'success');
                }
                this.modalRef.hide();
                this.usuarioComponent.listarUsuarios();
            });
        }
        else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Error', 'Debes completar el formulario. Verifique por favor.', 'error');
        }
    }
};
ModalUsuarioComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalRef"] },
    { type: _service_usuario_service__WEBPACK_IMPORTED_MODULE_6__["UsuarioService"] }
];
ModalUsuarioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-modal-usuario',
        template: __webpack_require__(/*! raw-loader!./modal-usuario.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/modal-usuario/modal-usuario.component.html"),
        styles: [__webpack_require__(/*! ./modal-usuario.component.css */ "./src/app/components/modal-usuario/modal-usuario.component.css")]
    })
], ModalUsuarioComponent);



/***/ }),

/***/ "./src/app/components/modal/modal.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/modal/modal.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbW9kYWwvbW9kYWwuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/modal/modal.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/modal/modal.component.ts ***!
  \*****************************************************/
/*! exports provided: ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _models_producto_producto_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/producto/producto.module */ "./src/app/models/producto/producto.module.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _service_producto_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../service/producto.service */ "./src/app/service/producto.service.ts");







let ModalComponent = class ModalComponent {
    constructor(formBuilder, modalRef, productoService) {
        this.formBuilder = formBuilder;
        this.modalRef = modalRef;
        this.productoService = productoService;
        this.editar = false;
        this.producto = new _models_producto_producto_module__WEBPACK_IMPORTED_MODULE_4__["ProductoModule"]();
    }
    ngOnInit() {
        this.formProducto = this.formBuilder.group({
            idProducto: [''],
            descripcion: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            cantidad: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            valorVenta: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            unidadDeMedida: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            estado: {
                idEstado: 1
            }
        });
    }
    guardar() {
        //console.log(this.formProducto.value);
        if (this.formProducto.valid) {
            this.productoService.ingresarProducto(this.formProducto.value).subscribe(res => {
                this.formProducto.reset();
                if (this.editar) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire('Exito', 'Producto Editado Correctamente!', 'success');
                }
                else {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire('Exito', 'Producto Registrado Correctamente!', 'success');
                }
                this.productoComponent.listarProductosPaginado();
                this.modalRef.hide();
            });
        }
        else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire('Error', 'Debes completar el formulario. Verifique por favor.', 'error');
        }
    }
};
ModalComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalRef"] },
    { type: _service_producto_service__WEBPACK_IMPORTED_MODULE_6__["ProductoService"] }
];
ModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-modal',
        template: __webpack_require__(/*! raw-loader!./modal.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/modal/modal.component.html"),
        styles: [__webpack_require__(/*! ./modal.component.css */ "./src/app/components/modal/modal.component.css")]
    })
], ModalComponent);



/***/ }),

/***/ "./src/app/components/producto/producto.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/producto/producto.component.ts ***!
  \***********************************************************/
/*! exports provided: ProductoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductoComponent", function() { return ProductoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js");
/* harmony import */ var _modal_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modal/modal.component */ "./src/app/components/modal/modal.component.ts");
/* harmony import */ var _service_producto_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/producto.service */ "./src/app/service/producto.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _models_paginacion_paginacion_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../models/paginacion/paginacion.module */ "./src/app/models/paginacion/paginacion.module.ts");








let ProductoComponent = class ProductoComponent {
    constructor(modalService, document, productoService) {
        this.modalService = modalService;
        this.productoService = productoService;
        this.busqueda = 'codigo';
        this.descripcionBusqueda = '';
        this.paginado = [];
        this.tamaniosPagina = [];
        this.esValidoInput1 = "form-control";
        this.esValidoInput = "valid-feedback";
    }
    ngOnInit() {
        this.tamaniosPagina.push({ id: 1, valor: 10 }, { id: 2, valor: 30 }, { id: 3, valor: 50 });
        this.listarProductosPaginado();
    }
    buscarProducto() {
        if (this.descripcionBusqueda != "") {
            var opcion = 1;
            if (this.busqueda != "codigo") {
                opcion = 2;
            }
            this.productoService.buscarProducto(this.descripcionBusqueda, opcion)
                .subscribe(res => {
                this.productoService.productos = res;
                console.log(res);
            });
        }
        else {
            this.listarProductos();
        }
    }
    ver() {
        alert(this.busqueda);
    }
    listarProductos() {
        this.productoService.listarProducto()
            .subscribe(res => {
            this.productoService.productos = res;
            console.log(res);
        });
    }
    cambiarClase() {
        this.esValidoInput1 = "form-control is-valid";
        this.esValidoInput = "valid-feedback";
    }
    cambiarClase2() {
        this.esValidoInput1 = "form-control is-invalid";
        this.esValidoInput = "invalid-feedback";
    }
    /*
    ngAfterViewInit() {
     console.log(this.nombre); // aparece la propiedad nativeElement y dentro una gran cantidad de propiedades y métodos
      this.nombre.nativeElement.setAttribute('placeholder', 'Escriba su nombre');
      this.nombre.nativeElement.addClass('form-control');
      this.nombre.nativeElement.focus();
      }*/
    eliminarProducto(producto) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
            title: '¿Deseas eliminar este producto?',
            text: 'No podras recuperar este registro!',
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Si, eliminar',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.value) {
                this.productoService.eliminarProducto(producto.idProducto).subscribe(res => {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire('Eliminado!', 'El registro ha sido eliminado correctamente.', 'success');
                    this.listarProductos();
                });
            }
        });
    }
    editarProducto(producto) {
        this.modalRef = this.modalService.show(_modal_modal_component__WEBPACK_IMPORTED_MODULE_3__["ModalComponent"], {
            initialState: {
                editar: true,
                title: 'Editar Producto',
                producto: producto,
                productoComponent: this
            }
        });
    }
    editarProductoDoubleClick(producto) {
        this.modalRef = this.modalService.show(_modal_modal_component__WEBPACK_IMPORTED_MODULE_3__["ModalComponent"], {
            initialState: {
                editar: true,
                title: 'Editar Producto',
                producto: producto,
                productoComponent: this
            }
        });
    }
    ingresarProducto() {
        this.modalRef = this.modalService.show(_modal_modal_component__WEBPACK_IMPORTED_MODULE_3__["ModalComponent"], {
            initialState: {
                title: 'Ingresar Producto',
                productoComponent: this
            }
        });
    }
    gestionarPaginado(pagina) {
        console.log(pagina.valor);
        switch (pagina.valor) {
            case 'Siguiente':
                this.paginacion.numeroPagina = this.paginacion.numeroPagina + 1;
                break;
            case 'Anterior':
                this.paginacion.numeroPagina = this.paginacion.numeroPagina - 1;
                break;
            default:
                this.paginacion.numeroPagina = parseInt(pagina.valor, 0);
                break;
        }
        this.obtenerPaginado();
    }
    listarProductosPaginado() {
        this.paginacion = new _models_paginacion_paginacion_module__WEBPACK_IMPORTED_MODULE_7__["PaginacionModule"]();
        this.productoService.listarProductoPaginado(this.paginacion)
            .subscribe(res => {
            this.paginacion = res;
            this.paginado = this.construirPaginado(res);
            this.productoService.productos = this.paginacion.listaFilas;
            console.log(this.paginacion);
        });
    }
    obtenerPaginado() {
        this.paginacion.primeraFila = (this.paginacion.numeroPagina - 1) * this.paginacion.tamanioPagina;
        this.productoService.listarProductoPaginado(this.paginacion)
            .subscribe(res => {
            this.paginacion = res;
            this.paginado = this.construirPaginado(res);
            this.productoService.productos = this.paginacion.listaFilas;
            console.log(this.paginacion);
        });
    }
    construirPaginado(objeto) {
        let valor;
        let paginaInicial;
        let paginaFinal;
        const lstPagina = [];
        if (objeto.numeroPagina > 0) {
            valor = Math.floor(objeto.numeroPagina / 5);
            valor = (objeto.numeroPagina % 5 === 0) ? (valor - 1) : valor;
            paginaInicial = (5 * valor) + 1;
            paginaFinal = 5 * (valor + 1);
            if (paginaFinal >= objeto.totalPaginas) {
                paginaFinal = objeto.totalPaginas;
            }
            if (objeto.numeroPagina === 1) {
                lstPagina.push({ clase: 'page-item disabled', valor: 'Anterior' });
            }
            else {
                lstPagina.push({ clase: 'page-item', valor: 'Anterior' });
            }
            for (let i = paginaInicial; i <= paginaFinal; i++) {
                if (objeto.numeroPagina === i) {
                    lstPagina.push({ clase: 'page-item active', valor: i });
                }
                else {
                    lstPagina.push({ clase: 'page-item', valor: i });
                }
            }
            if (objeto.numeroPagina === objeto.totalPaginas) {
                lstPagina.push({ clase: 'page-item disabled', valor: 'Siguiente' });
            }
            else {
                lstPagina.push({ clase: 'page-item', valor: 'Siguiente' });
            }
        }
        else {
            lstPagina.push({ clase: 'page-item disabled', valor: 'Anterior' });
            lstPagina.push({ clase: 'page-item disabled', valor: 'Siguiente' });
        }
        return lstPagina;
    }
    onChangeMostrar() {
        switch (this.tamanioPaginado) {
            case 1:
                this.paginacion.tamanioPagina = 10;
                break;
            case 2:
                this.paginacion.tamanioPagina = 30;
                break;
            case 3:
                this.paginacion.tamanioPagina = 50;
                break;
            default:
                this.paginacion.tamanioPagina = 10;
                break;
        }
        this.paginacion.numeroPagina = 1;
        this.obtenerPaginado();
    }
};
ProductoComponent.ctorParameters = () => [
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"],] }] },
    { type: _service_producto_service__WEBPACK_IMPORTED_MODULE_4__["ProductoService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('miInput', { static: false })
], ProductoComponent.prototype, "nombre", void 0);
ProductoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-producto',
        template: __webpack_require__(/*! raw-loader!./producto.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/producto/producto.component.html")
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]))
], ProductoComponent);



/***/ }),

/***/ "./src/app/components/proveedor/proveedor.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/proveedor/proveedor.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvdmVlZG9yL3Byb3ZlZWRvci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/proveedor/proveedor.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/proveedor/proveedor.component.ts ***!
  \*************************************************************/
/*! exports provided: ProveedorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProveedorComponent", function() { return ProveedorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _modal_proveedor_modal_proveedor_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modal-proveedor/modal-proveedor.component */ "./src/app/components/modal-proveedor/modal-proveedor.component.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js");
/* harmony import */ var _service_proveedor_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/proveedor.service */ "./src/app/service/proveedor.service.ts");






let ProveedorComponent = class ProveedorComponent {
    constructor(modalService, proveedorService) {
        this.modalService = modalService;
        this.proveedorService = proveedorService;
        this.descripcionBusqueda = "";
        this.busqueda = "ruc";
    }
    ngOnInit() {
        this.listarProveedor();
    }
    listarProveedor() {
        this.proveedorService.listarProveedor()
            .subscribe(res => {
            this.proveedorService.proveedores = res;
            console.log(res);
        });
    }
    buscarProveedor() {
        if (this.descripcionBusqueda != "") {
            var opcion = 1;
            if (this.busqueda != "ruc") {
                opcion = 2;
            }
            this.proveedorService.buscarProveedor(this.descripcionBusqueda, opcion)
                .subscribe(res => {
                this.proveedorService.proveedores = res;
                console.log(res);
            });
        }
        else {
            this.listarProveedor();
        }
    }
    ingresarProveedor() {
        this.modalRef = this.modalService.show(_modal_proveedor_modal_proveedor_component__WEBPACK_IMPORTED_MODULE_2__["ModalProveedorComponent"], {
            initialState: {
                title: 'Ingresar Proveedor'
            }
        });
    }
    editarProveedorDoubleClick(proveedor) {
        this.modalRef = this.modalService.show(_modal_proveedor_modal_proveedor_component__WEBPACK_IMPORTED_MODULE_2__["ModalProveedorComponent"], {
            initialState: {
                editar: true,
                title: 'Editar Proveedor',
                proveedor: proveedor,
                proveedorComponent: this
            }
        });
    }
    editarProveedor(proveedor) {
        this.modalRef = this.modalService.show(_modal_proveedor_modal_proveedor_component__WEBPACK_IMPORTED_MODULE_2__["ModalProveedorComponent"], {
            initialState: {
                editar: true,
                title: 'Editar Proveedor',
                proveedor: proveedor,
                proveedorComponent: this
            }
        });
    }
    eliminarProveedor(proveedor) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
            title: '¿Deseas eliminar este proveedor?',
            text: 'No podras recuperar este registro!',
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Si, eliminar',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.value) {
                this.proveedorService.eliminarProveedor(proveedor.ruc).subscribe(res => {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire('Eliminado!', 'El registro ha sido eliminado correctamente.', 'success');
                    this.listarProveedor();
                });
            }
        });
    }
};
ProveedorComponent.ctorParameters = () => [
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"] },
    { type: _service_proveedor_service__WEBPACK_IMPORTED_MODULE_5__["ProveedorService"] }
];
ProveedorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-proveedor',
        template: __webpack_require__(/*! raw-loader!./proveedor.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/proveedor/proveedor.component.html"),
        styles: [__webpack_require__(/*! ./proveedor.component.css */ "./src/app/components/proveedor/proveedor.component.css")]
    })
], ProveedorComponent);



/***/ }),

/***/ "./src/app/components/usuario/usuario.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/usuario/usuario.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXN1YXJpby91c3VhcmlvLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/usuario/usuario.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/usuario/usuario.component.ts ***!
  \*********************************************************/
/*! exports provided: UsuarioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuarioComponent", function() { return UsuarioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_usuario_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/usuario.service */ "./src/app/service/usuario.service.ts");
/* harmony import */ var _modal_usuario_modal_usuario_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modal-usuario/modal-usuario.component */ "./src/app/components/modal-usuario/modal-usuario.component.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js");






let UsuarioComponent = class UsuarioComponent {
    constructor(usuarioService, modalService) {
        this.usuarioService = usuarioService;
        this.modalService = modalService;
        this.busqueda = 'ID';
        this.descripcionBusqueda = '';
    }
    ngOnInit() {
        this.listarUsuarios();
    }
    buscarUsuario() {
        if (this.descripcionBusqueda != "") {
            var opcion = 1;
            if (this.busqueda != "ID") {
                opcion = 2;
            }
            this.usuarioService.buscarUsuario(this.descripcionBusqueda, opcion)
                .subscribe(res => {
                this.usuarioService.usuarios = res;
                console.log(res);
            });
        }
        else {
            this.listarUsuarios();
        }
    }
    ingresarUsuario() {
        this.modalRef = this.modalService.show(_modal_usuario_modal_usuario_component__WEBPACK_IMPORTED_MODULE_3__["ModalUsuarioComponent"], {
            initialState: {
                title: 'Ingresar Usuario',
                usuarioComponent: this
            }, class: "modal-lg"
        });
    }
    listarUsuarios() {
        this.usuarioService.listarUsuario()
            .subscribe(res => {
            this.usuarioService.usuarios = res;
            console.log(res);
        });
    }
    eliminarUsuario(usuario) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
            title: '¿Deseas eliminar este producto?',
            text: 'No podras recuperar este registro!',
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Si, eliminar',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.value) {
                this.usuarioService.eliminarUsuario(usuario.idUsuario).subscribe(res => {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Eliminado!', 'El registro ha sido eliminado correctamente.', 'success');
                    this.listarUsuarios();
                });
            }
        });
    }
    editarUsuario(usuario) {
        this.modalRef = this.modalService.show(_modal_usuario_modal_usuario_component__WEBPACK_IMPORTED_MODULE_3__["ModalUsuarioComponent"], {
            initialState: {
                editar: true,
                title: 'Editar Usuario',
                usuario: usuario,
                usuarioComponent: this
            }, class: "modal-lg"
        });
    }
    editarUsuarioDoubleClick(usuario) {
        this.modalRef = this.modalService.show(_modal_usuario_modal_usuario_component__WEBPACK_IMPORTED_MODULE_3__["ModalUsuarioComponent"], {
            initialState: {
                editar: true,
                title: 'Editar Usuario',
                usuario: usuario,
                usuarioComponent: this
            }, class: "modal-lg"
        });
    }
};
UsuarioComponent.ctorParameters = () => [
    { type: _service_usuario_service__WEBPACK_IMPORTED_MODULE_2__["UsuarioService"] },
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["BsModalService"] }
];
UsuarioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-usuario',
        template: __webpack_require__(/*! raw-loader!./usuario.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/usuario/usuario.component.html"),
        styles: [__webpack_require__(/*! ./usuario.component.css */ "./src/app/components/usuario/usuario.component.css")]
    })
], UsuarioComponent);



/***/ }),

/***/ "./src/app/models/compra/compra.module.ts":
/*!************************************************!*\
  !*** ./src/app/models/compra/compra.module.ts ***!
  \************************************************/
/*! exports provided: CompraModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompraModule", function() { return CompraModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _proveedor_proveedor_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../proveedor/proveedor.module */ "./src/app/models/proveedor/proveedor.module.ts");
/* harmony import */ var _comprobante_de_pago_comprobante_de_pago_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../comprobante-de-pago/comprobante-de-pago.module */ "./src/app/models/comprobante-de-pago/comprobante-de-pago.module.ts");
/* harmony import */ var _usuario_usuario_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../usuario/usuario.module */ "./src/app/models/usuario/usuario.module.ts");






let CompraModule = class CompraModule {
    constructor() {
        this.comprobanteDePago = new _comprobante_de_pago_comprobante_de_pago_module__WEBPACK_IMPORTED_MODULE_4__["ComprobanteDePagoModule"]();
        this.usuario = new _usuario_usuario_module__WEBPACK_IMPORTED_MODULE_5__["UsuarioModule"]();
        this.proveedor = new _proveedor_proveedor_module__WEBPACK_IMPORTED_MODULE_3__["ProveedorModule"]();
    }
};
CompraModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ]
    })
], CompraModule);



/***/ }),

/***/ "./src/app/models/comprobante-de-pago/comprobante-de-pago.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/models/comprobante-de-pago/comprobante-de-pago.module.ts ***!
  \**************************************************************************/
/*! exports provided: ComprobanteDePagoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComprobanteDePagoModule", function() { return ComprobanteDePagoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _tipo_de_comprobante_tipo_de_comprobante_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tipo-de-comprobante/tipo-de-comprobante.module */ "./src/app/models/tipo-de-comprobante/tipo-de-comprobante.module.ts");




let ComprobanteDePagoModule = class ComprobanteDePagoModule {
    constructor() {
        this.detalleComprobanteDePago = [];
        this.tipodecomprobantedepago = new _tipo_de_comprobante_tipo_de_comprobante_module__WEBPACK_IMPORTED_MODULE_3__["TipoDeComprobanteModule"]();
        this.tipodecomprobantedepago.idTipoDeComprobanteDePago = 1;
    }
};
ComprobanteDePagoModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ]
    })
], ComprobanteDePagoModule);



/***/ }),

/***/ "./src/app/models/detalle-comprobante-de-pago/detalle-comprobante-de-pago.module.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/models/detalle-comprobante-de-pago/detalle-comprobante-de-pago.module.ts ***!
  \******************************************************************************************/
/*! exports provided: DetalleComprobanteDePagoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetalleComprobanteDePagoModule", function() { return DetalleComprobanteDePagoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");



let DetalleComprobanteDePagoModule = class DetalleComprobanteDePagoModule {
};
DetalleComprobanteDePagoModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ]
    })
], DetalleComprobanteDePagoModule);



/***/ }),

/***/ "./src/app/models/paginacion/paginacion.module.ts":
/*!********************************************************!*\
  !*** ./src/app/models/paginacion/paginacion.module.ts ***!
  \********************************************************/
/*! exports provided: PaginacionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginacionModule", function() { return PaginacionModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");



let PaginacionModule = class PaginacionModule {
    constructor() {
        this.listaFilas = [];
        this.primeraFila = 0;
        this.totalPaginas = 0;
        this.tamanioPagina = 10;
        this.ultimaPagina = 0;
        this.numeroPagina = 1;
        this.ultimaFila = 0;
        this.totalRegistros = 0;
    }
};
PaginacionModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ]
    })
], PaginacionModule);



/***/ }),

/***/ "./src/app/models/persona/persona.module.ts":
/*!**************************************************!*\
  !*** ./src/app/models/persona/persona.module.ts ***!
  \**************************************************/
/*! exports provided: PersonaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonaModule", function() { return PersonaModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");



let PersonaModule = class PersonaModule {
};
PersonaModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ]
    })
], PersonaModule);



/***/ }),

/***/ "./src/app/models/producto/producto.module.ts":
/*!****************************************************!*\
  !*** ./src/app/models/producto/producto.module.ts ***!
  \****************************************************/
/*! exports provided: ProductoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductoModule", function() { return ProductoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");



let ProductoModule = class ProductoModule {
};
ProductoModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ]
    })
], ProductoModule);



/***/ }),

/***/ "./src/app/models/proveedor/proveedor.module.ts":
/*!******************************************************!*\
  !*** ./src/app/models/proveedor/proveedor.module.ts ***!
  \******************************************************/
/*! exports provided: ProveedorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProveedorModule", function() { return ProveedorModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");



let ProveedorModule = class ProveedorModule {
};
ProveedorModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ]
    })
], ProveedorModule);



/***/ }),

/***/ "./src/app/models/tipo-de-comprobante/tipo-de-comprobante.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/models/tipo-de-comprobante/tipo-de-comprobante.module.ts ***!
  \**************************************************************************/
/*! exports provided: TipoDeComprobanteModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TipoDeComprobanteModule", function() { return TipoDeComprobanteModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");



let TipoDeComprobanteModule = class TipoDeComprobanteModule {
};
TipoDeComprobanteModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ]
    })
], TipoDeComprobanteModule);



/***/ }),

/***/ "./src/app/models/usuario/usuario.module.ts":
/*!**************************************************!*\
  !*** ./src/app/models/usuario/usuario.module.ts ***!
  \**************************************************/
/*! exports provided: UsuarioModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuarioModule", function() { return UsuarioModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");



let UsuarioModule = class UsuarioModule {
};
UsuarioModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ]
    })
], UsuarioModule);



/***/ }),

/***/ "./src/app/service/compra-service.service.ts":
/*!***************************************************!*\
  !*** ./src/app/service/compra-service.service.ts ***!
  \***************************************************/
/*! exports provided: CompraServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompraServiceService", function() { return CompraServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");




let CompraServiceService = class CompraServiceService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.apiEndPoint = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiEndPoint;
        this.URL_API = `${this.apiEndPoint}/Compra`;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json; charset=ISO-8859-15', 'Accept': 'application/json' })
        };
    }
    listarCompra() {
        return this.httpClient.get(this.URL_API + "Listar");
    }
    ingresarCompra(compra) {
        return this.httpClient.post(this.URL_API + "Guardar", compra);
    }
    agregarDetalleComprobante(detalleComprobanteDePago) {
        return this.httpClient.post(this.URL_API + "AgregarDetalle", detalleComprobanteDePago);
    }
    eliminarDetalleComprobante(detalleComprobanteDePago) {
        return this.httpClient.post(this.URL_API + "EliminarDetalle", detalleComprobanteDePago);
    }
    guardarCompra(compra) {
        return this.httpClient.post(this.URL_API + "Guardar", compra);
    }
    listarCarrito() {
        return this.httpClient.get(this.URL_API + "listarCarrito");
    }
};
CompraServiceService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
CompraServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CompraServiceService);



/***/ }),

/***/ "./src/app/service/inventario-service.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/service/inventario-service.service.ts ***!
  \*******************************************************/
/*! exports provided: InventarioServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventarioServiceService", function() { return InventarioServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let InventarioServiceService = class InventarioServiceService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.URL_API = 'http://localhost:8082/';
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json; charset=ISO-8859-15', 'Accept': 'application/json' })
        };
    }
    productosInventario() {
        return this.httpClient.get(this.URL_API + "productosInventario");
    }
    totalProductos() {
        return this.httpClient.get(this.URL_API + "totalProductos");
    }
    costoInventario() {
        return this.httpClient.get(this.URL_API + "CostoInventario");
    }
};
InventarioServiceService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
InventarioServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], InventarioServiceService);



/***/ }),

/***/ "./src/app/service/producto.service.ts":
/*!*********************************************!*\
  !*** ./src/app/service/producto.service.ts ***!
  \*********************************************/
/*! exports provided: ProductoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductoService", function() { return ProductoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let ProductoService = class ProductoService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.URL_API = 'http://localhost:8082/Producto/';
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json; charset=ISO-8859-15', 'Accept': 'application/json' })
        };
    }
    ingresarProducto(producto) {
        return this.httpClient.post(this.URL_API + "Guardar", producto);
    }
    listarProducto() {
        return this.httpClient.get(this.URL_API + "Listar");
    }
    buscarProducto(descripcion, opcion) {
        return this.httpClient.get(this.URL_API + "Buscar" + `${descripcion}` + "?opcion=" + `${opcion}`);
    }
    /*
      public eliminarProducto(producto:ProductoModule)
      {
        return this.httpClient.post(this.URL_API+"Eliminar",producto);
      }
    */
    listarProductoPaginado(paginacion) {
        //return this.httpClient.get(this.URL_API+"ListarPaginado?posicion=10&tamanioPagina=10&numeroPagina=1");
        return this.httpClient.post(this.URL_API + "ListarPaginado", paginacion);
    }
    eliminarProducto(idProducto) {
        return this.httpClient.get(this.URL_API + "Eliminar" + `${idProducto}`);
    }
};
ProductoService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ProductoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ProductoService);



/***/ }),

/***/ "./src/app/service/proveedor.service.ts":
/*!**********************************************!*\
  !*** ./src/app/service/proveedor.service.ts ***!
  \**********************************************/
/*! exports provided: ProveedorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProveedorService", function() { return ProveedorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let ProveedorService = class ProveedorService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.URL_API = 'http://localhost:8082/Proveedor/';
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json; charset=ISO-8859-15', 'Accept': 'application/json' })
        };
    }
    ingresarProveedor(proveedor) {
        return this.httpClient.post(this.URL_API + "Guardar", proveedor);
    }
    listarProveedor() {
        return this.httpClient.get(this.URL_API + "Listar");
    }
    buscarProveedor(descripcion, opcion) {
        return this.httpClient.get(this.URL_API + "Buscar" + `${descripcion}` + "?opcion=" + `${opcion}`);
    }
    eliminarProveedor(ruc) {
        return this.httpClient.get(this.URL_API + "Eliminar" + `${ruc}`);
    }
};
ProveedorService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ProveedorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ProveedorService);



/***/ }),

/***/ "./src/app/service/usuario.service.ts":
/*!********************************************!*\
  !*** ./src/app/service/usuario.service.ts ***!
  \********************************************/
/*! exports provided: UsuarioService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuarioService", function() { return UsuarioService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let UsuarioService = class UsuarioService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.URL_API = 'http://localhost:8082/Usuario/';
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json; charset=ISO-8859-15', 'Accept': 'application/json' })
        };
    }
    ingresarUsuario(usuario) {
        return this.httpClient.post(this.URL_API + "Guardar", usuario);
    }
    listarUsuario() {
        return this.httpClient.get(this.URL_API + "Listar");
    }
    buscarUsuario(descripcion, opcion) {
        return this.httpClient.get(this.URL_API + "Buscar" + `${descripcion}` + "?opcion=" + `${opcion}`);
    }
    eliminarUsuario(ID) {
        return this.httpClient.get(this.URL_API + "Eliminar" + `${ID}`);
    }
};
UsuarioService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
UsuarioService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], UsuarioService);



/***/ }),

/***/ "./src/app/service/venta-service.service.ts":
/*!**************************************************!*\
  !*** ./src/app/service/venta-service.service.ts ***!
  \**************************************************/
/*! exports provided: VentaServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VentaServiceService", function() { return VentaServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let VentaServiceService = class VentaServiceService {
    constructor() { }
};
VentaServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], VentaServiceService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    apiEndPoint: 'http://localhost:8082/'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Programacion\Maconsa\front\maconsafront\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map