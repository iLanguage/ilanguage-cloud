'use strict';

var app = angular.module('app', ['ngRoute']);

var createColorScale = function(palette) {
  var colors = palette[palette.length - 1].filter(function(value) {
    return value !== '#ffffff';
  });
  return function(x) {
    var index = x % colors.length;
    return colors[index];
  };
}

function SampleController($scope) {
  $scope.hi = function() {}

  $scope.cloud1 = localStorage.getItem('cloud1') ? JSON.parse(localStorage.getItem('cloud1')) : {
    _id: 'cloud1',
    nonContentWords: 'and or is',
    text: 'A cloud is a visible mass of condensed droplets or frozen crystals suspended in the atmosphere. Cloud(s) may also refer to: Contents  [hide]  1 Information Technology 2 Science 3 Fiction 4 Literature 5 Music 6 Other uses 7 See also Information Technology  Cloud computing, Internet-based development and use of computer technology stored on servers rather than the client computers Cloud (operating system), a browser-based operating system that will instantly be usable after turning on the PC, by the makers of gOS Tag cloud, a visual depiction of user-generated tags used typically to describe the content of web sites Cloud storage, a model of networked online storage Cloud.com, a company that develops open source cloud orchestration software CloudStack, an open source cloud computing software Science  Magellanic Clouds, irregular dwarf galaxies near our galaxy, the Milky Way Interstellar cloud, dense region between stars Molecular cloud, interstellar cloud containing molecules Electron cloud, analogy used to describe an electron that orbits around a nucleus Point cloud, in mathematics, a set of vertices in a three-dimensional coordinate system CLOUD, an experimental facility used to investigate the microphysics between galactic cosmic rays and clouds Cloud chamber, an experimental device used in early studies of particle physics Fiction  Cloud Strife, a character in Final Fantasy VII media Bou Keng Wan (\'Cloud\'), a Kung Fu character from the Hong Kong comic, Fung Wan Cloud (comics), a Marvel comic book character Cloudbase, the fictional skyborne headquarters of Spectrum, from the science fiction television series Captain Scarlet and the Mysterons Clouds (film), a 2000 film written and directed by Don Thompson and produced by Will Arntz Literature  The Clouds, a comedy by Aristophanes Clouds, a 1977 philosophical comedic play by British playwright Michael Frayn The Clouds, a 1797 play by the British writer Richard Cumberland The Cloud of Unknowing, a medieval mystical text Music  Clouds (60s rock band), a Scottish music group that operated in the late 1960s Clouds (Australian band), an indie rock group based in Sydney, Australia in the 1990s The Clouds (UK band), a British indie pop band from the 1980s Cloud (music), sound mass consisting of statistical clouds of microsounds \'Clouds\', a song by Chaka Khan from Naughty \'Clouds\', a song by Level 42 on the album Retroglide \'Clouds\', a song by Spires That in the Sunset Rise on the album This Is Fire \'Clouds\' (Zach Sobiech song) a song by Zach Sobiech Clouds (Joni Mitchell album), 1969 Clouds (Lee Ranaldo album), 1997 Clouds (Tiamat album), 1992 Clouds (EP), an EP by Nosound \'Cloudy\', by Average White Band from the album Cut the Cake Other uses  Cloud (dancer), a b-boy, writer, and director from Florida Cloud (surname) Cloud, California, a former settlement in Kings County Clodoald (522–560), better known as Cloud or Saint Cloud, son of King Chlodomer of Orleans Saint-Cloud, a commune in the western suburbs of Paris, France Cloud (video game), a 2005 third-person computer puzzle game See also  The Cloud (disambiguation) Cloud Nine (disambiguation) Red Cloud (disambiguation) St. Cloud (disambiguation) White Cloud (disambiguation) McCloud (disambiguation)'
  };
  $scope.cloud0 = $scope.cloud1;

  $scope.cloud2 = localStorage.getItem('cloud2') ? JSON.parse(localStorage.getItem('cloud2')) : {
    _id: 'cloud2',
    nonContentWords: 'and or is a',
    text: 'Cloud computing, or the cloud, is a colloquial expression used to describe a variety of different types of computing concepts that involve a large number of computers connected through a real-time communication network such as the Internet.[1] Cloud computing is a term without a commonly accepted unequivocal scientific or technical definition. In science, cloud computing is a synonym for distributed computing over a network and means the ability to run a program on many connected computers at the same time. The phrase is also, more commonly used to refer to network-based services which appear to be provided by real server hardware, which in fact are served up by virtual hardware, simulated by software running on one or more real machines. Such virtual servers do not physically exist and can therefore be moved around and scaled up (or down) on the fly without affecting the end user - arguably, rather like a cloud. The popularity of the term can be attributed to its use in marketing to sell hosted services in the sense of application service provisioning that run client server software on a remote location. Advantages Cloud computing relies on sharing of resources to achieve coherence and economies of scale similar to a utility (like the electricity grid) over a network.[2] At the foundation of cloud computing is the broader concept of converged infrastructure and shared services. The cloud also focuses on maximizing the effectiveness of the shared resources. Cloud resources are usually not only shared by multiple users but are also dynamically re-allocated per demand. This can work for allocating resources to users. For example, a cloud computer facility, which serves European users during European business hours with a specific application (e.g. email) while the same resources are getting reallocated and serve North American users during North America\'s business hours with another application (e.g. web server). This approach should maximize the use of computing powers thus reducing environmental damage as well since less power, air conditioning, rackspace, etc. is required for a variety of functions. The term \'moving to cloud\' also refers to an organization moving away from a traditional CAPEX model (buy the dedicated hardware and depreciate it over a period of time) to theOPEX model (use a shared cloud infrastructure and pay as you use it). Proponents claim that cloud computing allows companies to avoid upfront infrastructure costs, and focus on projects that differentiate their businesses instead of infrastructure.[3]Proponents also claim that cloud computing allows enterprises to get their applications up and running faster, with improved manageability and less maintenance, and enables IT to more rapidly adjust resources to meet fluctuating and unpredictable business demand.[3][4][5] Hosted services In marketing, cloud computing is mostly used to sell hosted services in the sense of application service provisioning that run client server software at a remote location. Such services are given popular acronyms like \'SaaS\' (Software as a Service), \'PaaS\' (Platform as a Service), \'IaaS\' (Infrastructure as a Service), \'HaaS\' (Hardware as a Service) and finally \'EaaS\' (Everything as a Service). End users access cloud-based applications through a web browser, thin client or mobile app while the business software and user\'s data are stored on servers at a remote location. History The 1950s The underlying concept of cloud computing dates back to the 1950s, when large-scale mainframe computers became available in academia and corporations, accessible via thin clients/terminal computers, often referred to as \'dumb terminals\', because they were used for communications but had no internal processing capacities. To make more efficient use of costly mainframes, a practice evolved that allowed multiple users to share both the physical access to the computer from multiple terminals as well as to share the CPU time. This eliminated periods of inactivity on the mainframe and allowed for a greater return on the investment. The practice of sharing CPU time on a mainframe became known in the industry as time-sharing.[6] The 1960s–1990s John McCarthy opined in the 1960s that \'computation may someday be organized as a public utility.\'[7] Almost all the modern-day characteristics of cloud computing (elastic provision, provided as a utility, online, illusion of infinite supply), the comparison to the electricity industry and the use of public, private, government, and community forms, were thoroughly explored in Douglas Parkhill\'s 1966 book, The Challenge of the Computer Utility. Other scholars have shown that cloud computing\'s roots go all the way back to the 1950s when scientist Herb Grosch (the author of Grosch\'s law) postulated that the entire world would operate on dumb terminals powered by about 15 large data centers.[8] Due to the expense of these powerful computers, many corporations and other entities could avail themselves of computing capability through time sharing and several organizations, such as GE\'s GEISCO, IBM subsidiary The Service Bureau Corporation (SBC, founded in 1957), Tymshare (founded in 1966), National CSS (founded in 1967 and bought by Dun & Bradstreet in 1979), Dial Data (bought by Tymshare in 1968), and Bolt, Beranek and Newman (BBN) marketed time sharing as a commercial venture. The 1990s In the 1990s, telecommunications companies,who previously offered'
  };
  $scope.cloud3 = localStorage.getItem('cloud3') ? JSON.parse(localStorage.getItem('cloud3')) : {
    _id: 'cloud3',
    nonContentWords: 'ist in et',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In accumsan pulvinar feugiat. Nulla elementum lectus et nibh tempor egestas in id enim. In sit amet sollicitudin urna, laoreet hendrerit mi. Duis ac felis aliquet, pulvinar nisl vel, vulputate libero. Vestibulum iaculis arcu et placerat bibendum. Ut sed erat tellus. Duis sodales ac magna eu sodales.'
  };

  $scope.redrawSavedClouds = function() {
    localStorage.removeItem('cloud1');
    localStorage.removeItem('cloud2');
    localStorage.removeItem('cloud3');
    window.location.reload();
  };

  // Based on https://bl.ocks.org/mbostock/5577023
  d3.select('#palettes')
    .selectAll('.palette')
    .data(d3.entries(colorbrewer))
    .enter().append('span')
    .attr('class', 'palette')
    .attr('title', function(d) {
      return d.key;
    })
    .on('click', function(d) {
      console.log(d);
      var palette = createColorScale(d3.values(d.value));
      console.log(palette);

      $scope.$apply(function() {
        $scope.colorPalette = palette;
      });
    })
    .selectAll('.swatch')
    .data(function(d) {
      return d.value[d3.keys(d.value).map(Number).sort(d3.descending)[0]];
    })
    .enter().append('span')
    .attr('class', 'swatch')
    .style('background-color', function(d) {
      return d;
    });
}

app.directive('wordCloud', function() {
  return {
    restrict: 'A',
    scope: {},
    scope: {
      colorPalette: '=',
    },
    template: '<div></div>',
    replace: true,
    link: function(scope, element, attr) {
      var cloudHolder = {};

      scope.onWordClick = function(word) {
        var newText = prompt('Change this word?', word.orthography);
        if (!newText || newText === word.orthography) {
          return word;
        }

        word.orthography = newText;

        if (!scope.$$phase) {
          this.render();
          localStorage.setItem(this.id, JSON.stringify(this.toJSON()));
          scope.$apply();
        }
        return word;
      };

      scope.$watch(attr.cloudContent, function(newValue, oldValue) {
        if (!newValue) {
          return;
        }

        if (!cloudHolder.cloud && newValue._id) {
          cloudHolder.cloud = new WordCloud(newValue);
          cloudHolder.cloud.element = element[0];
          cloudHolder.cloud.onWordClick = scope.onWordClick;
          cloudHolder.cloud.onWordMouseover = function(word) {
            console.log('hover', word);
          };
          return cloudHolder.cloud.render();
        }
        return true;
      });

      scope.$watch(attr.colorPalette, function(newValue, oldValue) {
        if (!newValue) {
          return;
        }
        if (newValue && typeof newValue === 'function') {
          cloudHolder.cloud.fill = newValue;
        }
        cloudHolder.cloud.wordFrequencies.forEach(function(word) {
          delete word.color;
        });

        cloudHolder.cloud.render();
        return true;
      });
    }
  };
});
