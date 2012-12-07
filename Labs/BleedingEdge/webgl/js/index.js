(function() {
	var camera, scene, renderer;
	var geometry, material, mesh;

	// Create init function (be12)
	function init() {
  	  camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 10000 );
	  camera.position.z = 1000;
	  
	  scene = new THREE.Scene();
	  
	  geometry = new THREE.CubeGeometry( 200, 200, 200 );
	  material = new THREE.MeshBasicMaterial( { color: 0xff0000, wireframe: true } );
	  
	  mesh = new THREE.Mesh( geometry, material );
	  scene.add( mesh );
	  
	  renderer = new THREE.WebGLRenderer();
	  renderer.setSize( window.innerWidth, window.innerHeight );
	  
	  document.body.appendChild( renderer.domElement );  
	}

	// Create animate function (be13)
	function animate() {
	  requestAnimationFrame( animate );
	  
	  mesh.rotation.x += 0.01;
	  mesh.rotation.y += 0.02;
	  
	  renderer.render( scene, camera );
	}

	// create click and call init (be14)
	$('#animate').on('click', function() {
		animate();
	});

	init();
})();