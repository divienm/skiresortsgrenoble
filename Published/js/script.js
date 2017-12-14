
        <?php
        $adresse = "//shop.ebay.fr/i.html?_adv=1&_nkw=&_in_kw=1&_ex_kw=&_sacat=11232&LH_Complete=1&_udlo=&_udhi=&_samilow=&_samihi=&LH_SALE_CURRENCY=0&_sop=12&_dmd=1&_ipg=50";
        $page = file_get_contents ($adresse);
         
        $i=1;
        $condition=true;
        while($condition==true){
            preg_match ('#<td class="lv-ps"><div class="lv-dvpr"><div class="lv-pb5 cm-clg"><b>(.*?)€</b></div><p class="lv-sd">#', $page, $prix);
            echo $prix[1];
            if($i==3){ // pour arreter la boucle sinon ça fait une boucle infini ...
            $condition=false;
            }
            $i++;
            }
        ?>
        
    var map = document.querySelector('#map')

var paths = map.querySelectorAll('map__image a')

var links = map.querySelectorAll('.map__list a')

if(NodeList.prototype.forEach === undefined) {
    NodeList.prototype.forEach = function (callback) {
        [].forEach.call(this, callback)
    }
}

var activeArea = function(id) {
    map.querySelectorAll('.is-active').forEach(function (item){
        item.classList.remove('is-active')
})
            if (id !== undefined){
        document.querySelector('#list-' + id).classList.add('is-active')
        document.querySelector('#station-' + id).classList.add('is-active')
            }
        

}

paths.forEach(function (path) {
    path.addEventListener('mouseenter',function () {
        var id = this.id.replace('station-','')
        activeArea(id)
    })
})

links.forEach(function (link) {
    link.addEventListener('mouseenter',function () {
        var id = this.id.replace('list-','')
        activeArea(id)
    })
})

map.addEventListener('mouseover', function() {
    activeArea()
})
    