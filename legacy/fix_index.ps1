$lines = Get-Content 'index.html' -Encoding UTF8
$before = $lines[0..826]
$after = $lines[893..($lines.Count-1)]

$newSection = @'
  <!-- CORE SERVICES -->
  <section class="steam-bg py-20">
    <div class="max-w-7xl mx-auto px-6">
      <h2 class="text-3xl md:text-4xl font-bold text-center text-yellow-400 mb-10">Our Core Services</h2>
      <div class="grid md:grid-cols-3 gap-8">
        <div class="p-6 rounded-xl shadow-lg bg-[#121212]" data-aos="fade-up">
          <h3 class="text-xl font-semibold mb-2">360&deg; Tours &amp; Videos</h3>
          <img src="images/fyp.png" alt="360 degree virtual tours" class="rounded mb-3 w-full object-cover" loading="lazy">
          <p class="text-gray-400 mb-3">High-quality 360&deg; photography and virtual tours with hotspots and smooth transitions.</p>
          <p class="text-sm text-gray-400 mb-3">Starting from: 30,000 PKR &bull; Timeline: 1 week</p>
          <a href="360-content.html" class="text-yellow-400 hover:underline">Learn More &rarr;</a>
        </div>
        <div class="p-6 rounded-xl shadow-lg bg-[#121212]" data-aos="fade-up">
          <h3 class="text-xl font-semibold mb-2">Interactive Walkthroughs</h3>
          <img src="images/360 sam.jpeg" alt="Interactive walkthroughs" class="rounded mb-3 w-full object-cover" loading="lazy">
          <p class="text-gray-400 mb-3">WebGL-based walkthroughs viewable on any browser or device.</p>
          <p class="text-sm text-gray-400 mb-3">Starting from: 95,000 PKR &bull; Timeline: 2&ndash;3 weeks</p>
          <a href="interactive-walkthroughs.html" class="text-yellow-400 hover:underline">Learn More &rarr;</a>
        </div>
        <div class="p-6 rounded-xl shadow-lg bg-[#121212]" data-aos="fade-up">
          <h3 class="text-xl font-semibold mb-2">VR Staging &amp; Furniture</h3>
          <img src="images/vr realeatate.jpg" alt="VR staging" class="rounded mb-3 w-full object-cover" loading="lazy">
          <p class="text-gray-400 mb-3">Transform empty rooms into furnished, styled interiors using VR/AR visuals.</p>
          <p class="text-sm text-gray-400 mb-3">Starting from: 140,000 PKR &bull; Timeline: 3&ndash;5 weeks</p>
          <a href="vr-staging.html" class="text-yellow-400 hover:underline">Learn More &rarr;</a>
        </div>
        <div class="p-6 rounded-xl shadow-lg bg-[#121212]" data-aos="fade-up">
          <h3 class="text-xl font-semibold mb-2">3D Furniture Scanning</h3>
          <img src="images/vr realestate 3.jpg" alt="Furniture scanning" class="rounded mb-3 w-full object-cover" loading="lazy">
          <p class="text-gray-400 mb-3">Scan real furniture and create a 3D catalog or showroom for sales.</p>
          <p class="text-sm text-gray-400 mb-3">Starting from: 150,000 PKR &bull; Timeline: 2&ndash;4 weeks</p>
          <a href="furniture-scanning.html" class="text-yellow-400 hover:underline">Learn More &rarr;</a>
        </div>
        <div class="p-6 rounded-xl shadow-lg bg-[#121212]" data-aos="fade-up">
          <h3 class="text-xl font-semibold mb-2">Interactive PC Models</h3>
          <img src="images/after.png" alt="Interactive PC models" class="rounded mb-3 w-full object-cover" loading="lazy">
          <p class="text-gray-400 mb-3">Executable property models for exhibitions and sales centers.</p>
          <p class="text-sm text-gray-400 mb-3">Starting from: 150,000 PKR &bull; Timeline: 2&ndash;3 weeks</p>
          <a href="interactive-pc.html" class="text-yellow-400 hover:underline">Learn More &rarr;</a>
        </div>
        <div class="p-6 rounded-xl shadow-lg bg-[#121212]" data-aos="fade-up">
          <h3 class="text-xl font-semibold mb-2">VR Real Estate</h3>
          <img src="images/builds.png" alt="VR real estate" class="rounded mb-3 w-full object-cover" loading="lazy">
          <p class="text-gray-400 mb-3">Immersive headset-ready environments for luxury real estate presentations.</p>
          <p class="text-sm text-gray-400 mb-3">Starting from: 270,000 PKR &bull; Timeline: 4&ndash;6 weeks</p>
          <a href="vr-real-estate.html" class="text-yellow-400 hover:underline">Learn More &rarr;</a>
        </div>
        <div class="p-6 rounded-xl shadow-lg bg-[#121212] border border-yellow-400/30" data-aos="fade-up">
          <span class="inline-block bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full mb-3">NEW</span>
          <h3 class="text-xl font-semibold mb-2">VR Material Swap System</h3>
          <img src="images/in house/Screenshot 2025-10-16 220610.png" alt="VR Material Swap System" class="rounded mb-3 w-full object-cover" loading="lazy">
          <p class="text-gray-400 mb-3">Swap wall, floor, and furniture materials in real-time inside VR. Clients visualize design choices instantly before committing.</p>
          <p class="text-sm text-gray-400 mb-3">Add-on to VR Real Estate packages &bull; Contact for pricing</p>
          <a href="vr-real-estate.html" class="text-yellow-400 hover:underline">Learn More &rarr;</a>
        </div>
      </div>
    </div>
  </section>
'@

$newLines = $newSection -split "`n"
$result = $before + $newLines + $after
[System.IO.File]::WriteAllLines('index.html', $result, [System.Text.UTF8Encoding]::new($false))
Write-Host "Done. Lines: $($result.Count)"
