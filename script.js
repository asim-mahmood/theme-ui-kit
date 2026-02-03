const TEMPLATE_MAP = JSON.parse(
  '{"hero_classic": "<div class=\\"u-card center-text\\" style=\\"padding:6rem 2rem;\\"><span class=\\"u-badge\\">New Version 2.0</span><h1 class=\\"u-h1\\">Build Faster with ThemeStudio</h1><p class=\\"u-p\\" style=\\"max-width:600px; margin:0 auto 2rem auto;\\">Stop wrestling with CSS. Our new engine helps you deploy 10x faster.</p><div class=\\"flex-row\\" style=\\"justify-content:center; gap:12px;\\"><button class=\\"u-btn\\">Get Started</button><button class=\\"u-btn outline\\">Documentation</button></div></div>", "hero_split": "<div class=\\"u-card\\"><div class=\\"grid-2\\" style=\\"align-items:center;\\"><div><h1 class=\\"u-h1\\">Data that matters</h1><p class=\\"u-p\\">Real-time analytics for your e-commerce store.</p><button class=\\"u-btn\\">View Demo</button></div><div class=\\"u-img-box\\" style=\\"height:400px; background-image:url(https://placehold.co/600x400/e2e8f0/64748b?text=Dashboard); background-size:cover;\\"></div></div></div>", "hero_saas": "<div class=\\"u-card dark\\" style=\\"padding:5rem 2rem; text-align:center;\\"><h1 class=\\"u-h1\\" style=\\"color:#fff;\\">The Future of AI</h1><p class=\\"u-p\\" style=\\"color:#94a3b8;\\">Generate content in seconds.</p><div class=\\"flex-row\\" style=\\"justify-content:center; gap:10px;\\"><input class=\\"u-input\\" placeholder=\\"Enter prompt...\\" style=\\"max-width:300px; margin:0;\\"><button class=\\"u-btn\\" style=\\"background:#fff; color:#0f172a;\\">Generate</button></div></div>", "hero_app": "<div class=\\"u-card\\"><div class=\\"grid-2\\" style=\\"align-items:center;\\"><div><h1 class=\\"u-h1\\">Pocket Personal Trainer</h1><p class=\\"u-p\\">Track your workouts, nutrition, and sleep. Available on iOS and Android.</p><div class=\\"flex-row gap-sm\\"><button class=\\"u-btn sm\\">App Store</button><button class=\\"u-btn sm outline\\">Play Store</button></div></div><div class=\\"u-mockup-phone\\"><div class=\\"screen\\"><img src=\\"https://placehold.co/280x550/e2e8f0/64748b?text=App+Screen\\" style=\\"width:100%; height:100%; object-fit:cover;\\"></div></div></div></div>", "hero_video": "<div class=\\"u-card dark\\" style=\\"padding:8rem 2rem; text-align:center; position:relative; overflow:hidden;\\"><div style=\\"position:absolute; inset:0; background:linear-gradient(45deg, #111, #333); opacity:0.9; z-index:0;\\"></div><div style=\\"position:relative; z-index:1;\\"><h1 class=\\"u-h1\\" style=\\"color:#fff; font-size:4rem;\\">Cinematic</h1><p class=\\"u-p\\" style=\\"color:#eee;\\">Watch the 2026 Keynote.</p><button class=\\"u-btn\\"><i class=\\"ri-play-fill\\"></i> Watch Now</button></div></div>", "hero_gradient": "<div class=\\"u-card center-text\\" style=\\"padding:6rem 2rem; background:linear-gradient(135deg, var(--user-primary) 0%, #8b5cf6 100%); color:white;\\"><h1 class=\\"u-h1\\" style=\\"color:white;\\">Limitless Design</h1><p class=\\"u-p\\" style=\\"color:rgba(255,255,255,0.9);\\">Create without boundaries.</p><button class=\\"u-btn\\" style=\\"background:white; color:var(--user-primary);\\">Explore</button></div>", "hero_overlap": "<div class=\\"u-card\\" style=\\"padding-bottom:0; background:#f8fafc; border:none;\\"><div class=\\"center-text\\" style=\\"max-width:700px; margin:0 auto 3rem auto;\\"><h1 class=\\"u-h1\\">All-in-one Platform</h1><p class=\\"u-p\\">Manage your entire business.</p></div><div class=\\"u-mockup-window\\" style=\\"max-width:800px; margin:0 auto; box-shadow:0 20px 50px rgba(0,0,0,0.1);\\"><div class=\\"content\\"><img src=\\"https://placehold.co/800x500/e2e8f0/64748b?text=Admin+Panel\\" style=\\"width:100%; display:block;\\"></div></div></div>", "hero_signup": "<div class=\\"u-card\\"><div class=\\"grid-2\\" style=\\"align-items:center;\\"><div><h1 class=\\"u-h1\\">Join 10,000+ Users</h1><p class=\\"u-p\\">Start your 14-day free trial today.</p></div><div class=\\"u-card\\" style=\\"padding:2rem; box-shadow:var(--user-shadow);\\"><input class=\\"u-input\\" placeholder=\\"Full Name\\"><input class=\\"u-input\\" placeholder=\\"Email Address\\"><input class=\\"u-input\\" type=\\"password\\" placeholder=\\"Password\\"><button class=\\"u-btn w-full\\">Create Account</button></div></div></div>", "fe_hero_text": "<div class=\\"u-card center-text\\" style=\\"padding:6rem 2rem;\\"><span class=\\"u-badge\\" style=\\"background:#e0e7ff; color:#4338ca;\\">v2.0 Released</span><h1 class=\\"u-h1\\" style=\\"font-size:3.5rem;\\">Design better, <span style=\\"color:var(--user-primary);\\">faster</span>.</h1><p class=\\"u-p\\" style=\\"max-width:600px; margin:0 auto 2rem auto; font-size:1.2rem;\\">Powerful UI components for developers.</p><div class=\\"flex-row\\" style=\\"justify-content:center; gap:15px;\\"><button class=\\"u-btn\\" style=\\"padding:12px 25px; font-size:1rem;\\">Get Started</button><button class=\\"u-btn outline\\" style=\\"padding:12px 25px; font-size:1rem;\\">Live Demo</button></div></div>", "fe_logo_strip": "<div class=\\"u-card center-text\\" style=\\"background:#f8fafc; border:none;\\"><p class=\\"u-small\\" style=\\"font-weight:600; letter-spacing:1px; margin-bottom:2rem;\\">TRUSTED BY TEAMS AT</p><div class=\\"flex-row\\" style=\\"justify-content:center; gap:3rem; opacity:0.6; flex-wrap:wrap;\\"><h3 style=\\"margin:0; color:#64748b;\\">Acme</h3><h3 style=\\"margin:0; color:#64748b;\\">Quantum</h3><h3 style=\\"margin:0; color:#64748b;\\">Echo</h3><h3 style=\\"margin:0; color:#64748b;\\">Neptune</h3></div></div>", "fe_feature_check": "<div class=\\"u-card\\"><div class=\\"grid-2\\" style=\\"align-items:center;\\"><div class=\\"u-img-box\\"><img src=\\"https://placehold.co/400x300/e2e8f0/64748b?text=Analytics\\" style=\\"width:100%; height:100%; object-fit:cover;\\"></div><div><h2 class=\\"u-h2\\">Real-time Insights</h2><p class=\\"u-p\\">Monitor your data with precision.</p><ul style=\\"list-style:none; padding:0;\\"><li style=\\"margin-bottom:10px;\\"><i class=\\"ri-checkbox-circle-fill\\" style=\\"color:var(--user-primary); margin-right:10px;\\"></i> Live Updates</li><li style=\\"margin-bottom:10px;\\"><i class=\\"ri-checkbox-circle-fill\\" style=\\"color:var(--user-primary); margin-right:10px;\\"></i> Advanced Filters</li><li><i class=\\"ri-checkbox-circle-fill\\" style=\\"color:var(--user-primary); margin-right:10px;\\"></i> Data Export</li></ul></div></div></div>", "fe_pricing_3": "<div class=\\"u-card\\"><h2 class=\\"u-h2 center-text\\">Simple Pricing</h2><p class=\\"u-p center-text\\" style=\\"margin-bottom:3rem;\\">No hidden fees.</p><div class=\\"grid-3\\"><div class=\\"u-card\\" style=\\"border-top:4px solid #cbd5e1;\\"><h3>Basic</h3><div class=\\"u-h1\\">$0</div><p class=\\"u-small\\">Forever free</p><button class=\\"u-btn outline w-full\\">Sign Up</button></div><div class=\\"u-card\\" style=\\"border-top:4px solid var(--user-primary); transform:scale(1.05); box-shadow:var(--user-shadow);\\"><h3>Pro</h3><div class=\\"u-h1\\">$29</div><p class=\\"u-small\\">Per month</p><button class=\\"u-btn w-full\\">Get Started</button></div><div class=\\"u-card\\" style=\\"border-top:4px solid #cbd5e1;\\"><h3>Enterprise</h3><div class=\\"u-h1\\">$99</div><p class=\\"u-small\\">Per month</p><button class=\\"u-btn outline w-full\\">Contact</button></div></div></div>", "fe_faq_grid": "<div class=\\"u-card\\"><h2 class=\\"u-h2 center-text\\" style=\\"margin-bottom:3rem;\\">FAQ</h2><div class=\\"grid-2\\"><div class=\\"u-card\\" style=\\"border:none; background:#f8fafc;\\"><h4>How does it work?</h4><p class=\\"u-small\\">Lorem ipsum dolor sit amet.</p></div><div class=\\"u-card\\" style=\\"border:none; background:#f8fafc;\\"><h4>Is it free?</h4><p class=\\"u-small\\">Yes, for personal use.</p></div><div class=\\"u-card\\" style=\\"border:none; background:#f8fafc;\\"><h4>Can I export?</h4><p class=\\"u-small\\">Absolutely, click export.</p></div><div class=\\"u-card\\" style=\\"border:none; background:#f8fafc;\\"><h4>Support?</h4><p class=\\"u-small\\">24/7 via email.</p></div></div></div>", "fe_newsletter_minimal": "<div class=\\"u-card center-text\\" style=\\"background:#1e293b; color:white;\\"><h2 class=\\"u-h2\\" style=\\"color:white;\\">Stay Updated</h2><p class=\\"u-p\\" style=\\"color:#94a3b8;\\">Join our weekly newsletter.</p><div class=\\"flex-row\\" style=\\"justify-content:center; gap:10px; margin-top:2rem;\\"><input class=\\"u-input\\" placeholder=\\"Enter email\\" style=\\"width:300px; margin:0;\\"><button class=\\"u-btn\\" style=\\"background:white; color:#1e293b;\\">Subscribe</button></div></div>", "mkt_features_zig": "<div class=\\"u-card\\"><div class=\\"grid-2\\" style=\\"align-items:center; margin-bottom:3rem;\\"><div class=\\"u-img-box\\"><img src=\\"https://placehold.co/400x300/e2e8f0/64748b?text=Collab\\" style=\\"width:100%; height:100%; object-fit:cover;\\"></div><div><h2 class=\\"u-h2\\">Real-time Collaboration</h2><p class=\\"u-p\\">Work with your team in real-time.</p></div></div><div class=\\"grid-2\\" style=\\"align-items:center;\\"><div><h2 class=\\"u-h2\\">Detailed Reports</h2><p class=\\"u-p\\">Export PDF and CSV reports.</p></div><div class=\\"u-img-box\\"><img src=\\"https://placehold.co/400x300/e2e8f0/64748b?text=Reports\\" style=\\"width:100%; height:100%; object-fit:cover;\\"></div></div></div>", "mkt_team_grid": "<div class=\\"u-card\\"><h3 class=\\"u-h3 center-text\\">Our Team</h3><div class=\\"grid-3\\" style=\\"text-align:center;\\"><div class=\\"u-card\\" style=\\"border:none;\\"><div class=\\"u-avatar\\" style=\\"width:100px; height:100px; margin:0 auto 1rem; font-size:2rem;\\">A</div><h4>Alice Cop</h4><p class=\\"u-small\\">CEO</p></div><div class=\\"u-card\\" style=\\"border:none;\\"><div class=\\"u-avatar\\" style=\\"width:100px; height:100px; margin:0 auto 1rem; font-size:2rem; background:#10b981;\\">B</div><h4>Bob Lee</h4><p class=\\"u-small\\">CTO</p></div><div class=\\"u-card\\" style=\\"border:none;\\"><div class=\\"u-avatar\\" style=\\"width:100px; height:100px; margin:0 auto 1rem; font-size:2rem; background:#f59e0b;\\">C</div><h4>Charlie</h4><p class=\\"u-small\\">Designer</p></div></div></div>", "mkt_testi_grid": "<div class=\\"u-card\\"><div class=\\"grid-2\\"><div class=\\"u-card\\" style=\\"background:#f8fafc; border:none;\\"><p class=\\"u-p\\">\\"Incredible tool. Saved us weeks.\\"</p><div class=\\"flex-row gap-sm\\"><b>Jane Doe</b> <span class=\\"u-small\\">Google</span></div></div><div class=\\"u-card\\" style=\\"background:#f8fafc; border:none;\\"><p class=\\"u-p\\">\\"The best support I have ever seen.\\"</p><div class=\\"flex-row gap-sm\\"><b>John Smith</b> <span class=\\"u-small\\">Microsoft</span></div></div></div></div>", "mkt_cta_banner": "<div class=\\"u-card center-text\\" style=\\"background:var(--user-primary); color:white;\\"><h2 class=\\"u-h2\\" style=\\"color:white;\\">Ready to launch?</h2><p class=\\"u-p\\" style=\\"color:rgba(255,255,255,0.9);\\">Get started with our free tier today.</p><button class=\\"u-btn\\" style=\\"background:white; color:var(--user-primary);\\">Create Account</button></div>", "mkt_logo_cloud": "<div class=\\"u-card center-text\\"><p class=\\"u-small\\">TRUSTED BY</p><div class=\\"flex-row\\" style=\\"justify-content:center; gap:3rem; opacity:0.5; font-weight:bold; font-size:1.5rem;\\"><span>ACME</span><span>STRIPE</span><span>UBER</span><span>ZOOM</span></div></div>", "stat_row": "<div class=\\"u-card\\"><div class=\\"u-stats-row\\"><div class=\\"stat-item\\"><div class=\\"label\\">Total Likes</div><div class=\\"value\\">25.6K</div><div class=\\"desc\\">21% more than last month</div></div><div class=\\"stat-item\\"><div class=\\"label\\">Page Views</div><div class=\\"value\\">2.6M</div><div class=\\"desc\\">14% more than last month</div></div><div class=\\"stat-item\\"><div class=\\"label\\">New Registers</div><div class=\\"value\\">1,200</div></div></div></div>", "stat_card": "<div class=\\"u-card center-text\\"><div class=\\"label\\">Current Balance</div><div class=\\"value\\" style=\\"font-size:3rem; margin:10px 0;\\">$89,400</div><div class=\\"u-badge\\" style=\\"background:#dcfce7; color:#15803d;\\">+4.5%</div></div>", "table_zebra": "<div class=\\"u-card\\" style=\\"overflow-x:auto;\\"><table class=\\"u-table\\"><thead><tr><th>#</th><th>Name</th><th>Job</th><th>Company</th></tr></thead><tbody><tr><th>1</th><td>Cy Ganderton</td><td>Quality Control Specialist</td><td>Littel, Schaden and Vandervort</td></tr><tr class=\\"active\\"><th>2</th><td>Hart Hagerty</td><td>Desktop Support Technician</td><td>Zemlak, Daniel and Leannon</td></tr><tr><th>3</th><td>Brice Swyre</td><td>Tax Accountant</td><td>Carroll Group</td></tr></tbody></table></div>", "dash_stats": "<div class=\\"u-card\\"><div class=\\"grid-3\\"><div class=\\"u-card\\" style=\\"padding:1rem;\\"><div class=\\"u-small\\">Total Revenue</div><div class=\\"u-h2\\">$45,231</div><div class=\\"u-small\\" style=\\"color:green;\\">+20%</div></div><div class=\\"u-card\\" style=\\"padding:1rem;\\"><div class=\\"u-small\\">Active Users</div><div class=\\"u-h2\\">1,200</div><div class=\\"u-small\\" style=\\"color:green;\\">+5%</div></div><div class=\\"u-card\\" style=\\"padding:1rem;\\"><div class=\\"u-small\\">Bounce Rate</div><div class=\\"u-h2\\">42%</div><div class=\\"u-small\\" style=\\"color:red;\\">-2%</div></div></div></div>", "dash_table": "<div class=\\"u-card\\" style=\\"overflow-x:auto;\\"><div class=\\"flex-between\\" style=\\"margin-bottom:1rem;\\"><h3>Recent Orders</h3><button class=\\"u-btn sm\\">Export</button></div><table class=\\"u-table\\" style=\\"width:100%; border-collapse:collapse;\\"><thead><tr style=\\"border-bottom:1px solid #e2e8f0; text-align:left;\\"><th>ID</th><th>Customer</th><th>Status</th><th>Total</th></tr></thead><tbody><tr style=\\"border-bottom:1px solid #e2e8f0;\\"><td style=\\"padding:10px;\\">#1234</td><td>John Doe</td><td><span class=\\"u-badge\\">Paid</span></td><td>$120</td></tr><tr style=\\"border-bottom:1px solid #e2e8f0;\\"><td style=\\"padding:10px;\\">#1235</td><td>Jane Smith</td><td><span class=\\"u-badge\\" style=\\"background:#fef3c7; color:#d97706;\\">Pending</span></td><td>$85</td></tr></tbody></table></div>", "dash_kanban": "<div class=\\"u-card\\" style=\\"background:transparent; border:none; box-shadow:none; padding:0;\\"><div class=\\"grid-3\\"><div class=\\"u-card\\" style=\\"background:#f1f5f9;\\"><h4 class=\\"u-h4\\">To Do</h4><div class=\\"u-card\\" style=\\"padding:10px; margin-bottom:10px; cursor:move;\\">Fix Login Bug</div><div class=\\"u-card\\" style=\\"padding:10px; margin-bottom:10px; cursor:move;\\">Update Docs</div></div><div class=\\"u-card\\" style=\\"background:#f1f5f9;\\"><h4 class=\\"u-h4\\">In Progress</h4><div class=\\"u-card\\" style=\\"padding:10px; margin-bottom:10px; cursor:move;\\">API Integration</div></div><div class=\\"u-card\\" style=\\"background:#f1f5f9;\\"><h4 class=\\"u-h4\\">Done</h4><div class=\\"u-card\\" style=\\"padding:10px; margin-bottom:10px; opacity:0.6;\\">Design Mockups</div></div></div></div>", "dash_profile_head": "<div class=\\"u-card\\" style=\\"padding:0; overflow:hidden;\\"><div style=\\"height:150px; background:linear-gradient(to right, #4f46e5, #9333ea);\\"></div><div style=\\"padding:0 2rem 2rem 2rem; margin-top:-40px;\\"><div class=\\"flex-between\\" style=\\"align-items:flex-end;\\"><div class=\\"flex-row\\" style=\\"gap:1rem;\\"><div class=\\"u-avatar\\" style=\\"width:80px; height:80px; font-size:2rem; border:4px solid white;\\">JD</div><div><h2 class=\\"u-h2\\" style=\\"margin:0;\\">John Doe</h2><p class=\\"u-small\\">Senior Developer</p></div></div><button class=\\"u-btn outline\\">Edit Profile</button></div></div></div>", "dash_file_grid": "<div class=\\"u-card\\"><h3 class=\\"u-h3\\">Files</h3><div class=\\"grid-3\\"><div class=\\"u-card center-text\\" style=\\"padding:1rem;\\"><i class=\\"ri-folder-fill\\" style=\\"font-size:3rem; color:#f59e0b;\\"></i><p class=\\"u-small\\">Documents</p></div><div class=\\"u-card center-text\\" style=\\"padding:1rem;\\"><i class=\\"ri-folder-fill\\" style=\\"font-size:3rem; color:#f59e0b;\\"></i><p class=\\"u-small\\">Images</p></div><div class=\\"u-card center-text\\" style=\\"padding:1rem;\\"><i class=\\"ri-file-pdf-fill\\" style=\\"font-size:3rem; color:#ef4444;\\"></i><p class=\\"u-small\\">Report.pdf</p></div></div></div>", "dash_activity": "<div class=\\"u-card\\"><h3>Recent Activity</h3><ul class=\\"u-timeline\\"><li class=\\"step\\"><b>New Order</b> - #3455 <div class=\\"u-small\\">2 mins ago</div></li><li class=\\"step\\"><b>User Signup</b> - m@test.com <div class=\\"u-small\\">1 hour ago</div></li><li class=\\"step\\"><b>Server Alert</b> - CPU > 90% <div class=\\"u-small\\">5 hours ago</div></li></ul></div>", "nav_sidebar_viz": "<div class=\\"u-card\\"><div style=\\"display:flex; height:300px; border:1px solid #e2e8f0; border-radius:8px; overflow:hidden;\\"><div style=\\"width:200px; background:#1e293b; color:white; padding:1rem;\\"><div style=\\"margin-bottom:2rem; font-weight:bold;\\">Admin</div><div>Dashboard</div><div style=\\"opacity:0.6; margin-top:10px;\\">Users</div><div style=\\"opacity:0.6; margin-top:10px;\\">Settings</div></div><div style=\\"flex:1; background:#f1f5f9; padding:1rem;\\">Content Area</div></div></div>", "drawer_viz": "<div class=\\"u-card\\"><div style=\\"display:flex; height:200px; border:1px solid #e2e8f0; border-radius:8px; overflow:hidden;\\"><div style=\\"width:150px; background:#1e293b; color:white; padding:1rem;\\"><div>Menu 1</div><div style=\\"opacity:0.6; margin-top:10px;\\">Menu 2</div></div><div style=\\"flex:1; background:#f1f5f9; padding:1rem; display:flex; align-items:center; justify-content:center; color:#94a3b8;\\">Main Content Area</div></div><p class=\\"u-small center-text\\" style=\\"margin-top:10px;\\">Drawer Layout Visual</p></div>", "card_glass": "<div class=\\"u-card dark\\" style=\\"background:rgba(15, 23, 42, 0.8); backdrop-filter:blur(10px); position:relative;\\"><div style=\\"position:absolute; top:-20px; right:-20px; width:100px; height:100px; background:var(--user-primary); border-radius:50%; z-index:-1;\\"></div><h2 class=\\"u-h2\\" style=\\"color:white;\\">Glassmorphism</h2><p class=\\"u-p\\">Blurry background effect.</p><button class=\\"u-btn\\">Cool</button></div>", "card_image_full": "<div class=\\"u-card\\" style=\\"padding:0; overflow:hidden; position:relative; height:300px;\\"><img src=\\"https://placehold.co/400x300/e2e8f0/64748b?text=Fashion\\" style=\\"width:100%; height:100%; object-fit:cover;\\"><div style=\\"position:absolute; bottom:0; left:0; right:0; padding:1.5rem; background:linear-gradient(to top, rgba(0,0,0,0.8), transparent); color:white;\\"><h3 style=\\"margin:0;\\">Summer Collection</h3><p style=\\"margin:0; font-size:0.9rem; opacity:0.9;\\">New arrivals in stock.</p></div></div>", "shop_grid": "<div class=\\"u-card\\"><div class=\\"grid-3\\"><div class=\\"u-card\\" style=\\"padding:1rem;\\"><div class=\\"u-img-box\\" style=\\"height:150px; margin-bottom:10px;\\"><img src=\\"https://placehold.co/150x150/e2e8f0/64748b?text=Shoe\\" style=\\"width:100%; height:100%; object-fit:contain;\\"></div><h4>Nike Air</h4><div class=\\"flex-between\\"><b>$120</b><button class=\\"u-btn sm\\">+</button></div></div><div class=\\"u-card\\" style=\\"padding:1rem;\\"><div class=\\"u-img-box\\" style=\\"height:150px; margin-bottom:10px;\\"><img src=\\"https://placehold.co/150x150/e2e8f0/64748b?text=Watch\\" style=\\"width:100%; height:100%; object-fit:contain;\\"></div><h4>Apple Watch</h4><div class=\\"flex-between\\"><b>$399</b><button class=\\"u-btn sm\\">+</button></div></div><div class=\\"u-card\\" style=\\"padding:1rem;\\"><div class=\\"u-img-box\\" style=\\"height:150px; margin-bottom:10px;\\"><img src=\\"https://placehold.co/150x150/e2e8f0/64748b?text=Bag\\" style=\\"width:100%; height:100%; object-fit:contain;\\"></div><h4>Backpack</h4><div class=\\"flex-between\\"><b>$85</b><button class=\\"u-btn sm\\">+</button></div></div></div></div>", "shop_wide": "<div class=\\"u-card\\"><div class=\\"grid-2\\" style=\\"align-items:center;\\"><div class=\\"u-img-box\\" style=\\"height:250px;\\"><img src=\\"https://placehold.co/400x400/e2e8f0/64748b?text=Headphones\\" style=\\"width:100%; height:100%; object-fit:cover;\\"></div><div><span class=\\"u-badge\\">Sale</span><h2 class=\\"u-h2\\">Sony XM5</h2><p class=\\"u-p\\">Industry leading noise cancellation.</p><div class=\\"flex-row gap-sm\\"><span class=\\"u-h2\\" style=\\"margin:0;\\">$299</span> <span style=\\"text-decoration:line-through; color:#94a3b8;\\">$349</span></div><button class=\\"u-btn w-full\\" style=\\"margin-top:1rem;\\">Add to Cart</button></div></div></div>", "price_toggle": "<div class=\\"u-card center-text\\"><div class=\\"flex-row\\" style=\\"justify-content:center; gap:10px; margin-bottom:2rem;\\"><span>Monthly</span><div class=\\"u-toggle active\\"></div><span>Yearly</span></div><div class=\\"grid-3\\"><div class=\\"u-card\\"><h3>Basic</h3><div class=\\"u-h2\\">$19</div><ul><li>1 User</li></ul></div><div class=\\"u-card dark\\" style=\\"transform:scale(1.1);\\"><h3>Pro</h3><div class=\\"u-h2\\" style=\\"color:white;\\">$49</div><ul><li>5 Users</li></ul></div><div class=\\"u-card\\"><h3>Ent</h3><div class=\\"u-h2\\">$99</div><ul><li>Unlimted</li></ul></div></div></div>", "shop_categories": "<div class=\\"u-card\\"><h3 class=\\"u-h3\\">Categories</h3><div class=\\"grid-2\\"><div style=\\"position:relative; height:100px; border-radius:8px; overflow:hidden; display:flex; align-items:center; justify-content:center; color:white; font-weight:bold; font-size:1.5rem;\\"><img src=\\"https://placehold.co/300x100/e2e8f0/64748b?text=Mens\\" style=\\"position:absolute; inset:0; width:100%; height:100%; object-fit:cover; z-index:-1;\\"><div style=\\"position:absolute; inset:0; background:rgba(0,0,0,0.4);\\"></div><span style=\\"position:relative;\\">Men</span></div><div style=\\"position:relative; height:100px; border-radius:8px; overflow:hidden; display:flex; align-items:center; justify-content:center; color:white; font-weight:bold; font-size:1.5rem;\\"><img src=\\"https://placehold.co/300x100/e2e8f0/64748b?text=Womens\\" style=\\"position:absolute; inset:0; width:100%; height:100%; object-fit:cover; z-index:-1;\\"><div style=\\"position:absolute; inset:0; background:rgba(0,0,0,0.4);\\"></div><span style=\\"position:relative;\\">Women</span></div></div></div>", "review_summary": "<div class=\\"u-card\\"><div class=\\"grid-2\\"><div class=\\"center-text\\"><div class=\\"u-h1\\" style=\\"margin:0;\\">4.8</div><div style=\\"color:#eab308;\\"><i class=\\"ri-star-fill\\"></i><i class=\\"ri-star-fill\\"></i><i class=\\"ri-star-fill\\"></i><i class=\\"ri-star-fill\\"></i><i class=\\"ri-star-half-fill\\"></i></div><p class=\\"u-small\\">2,400 reviews</p></div><div><div class=\\"flex-row gap-sm\\" style=\\"font-size:0.8rem;\\"><span>5</span> <div style=\\"flex:1; height:8px; background:#e2e8f0; border-radius:4px;\\"><div style=\\"width:80%; height:100%; background:#eab308; border-radius:4px;\\"></div></div></div><div class=\\"flex-row gap-sm\\" style=\\"font-size:0.8rem;\\"><span>4</span> <div style=\\"flex:1; height:8px; background:#e2e8f0; border-radius:4px;\\"><div style=\\"width:40%; height:100%; background:#eab308; border-radius:4px;\\"></div></div></div></div></div></div>", "cookie_banner": "<div class=\\"u-card\\" style=\\"position:fixed; bottom:20px; right:20px; width:300px; z-index:100; box-shadow:0 10px 25px rgba(0,0,0,0.1);\\"><h4 class=\\"u-h4\\">We use cookies</h4><p class=\\"u-small\\">To improve your experience and analytics.</p><div class=\\"flex-row gap-sm\\"><button class=\\"u-btn sm w-full\\">Accept</button><button class=\\"u-btn sm outline w-full\\">Decline</button></div></div>", "shop_product_page": "<div class=\\"u-card\\"><div class=\\"grid-2\\"><div class=\\"u-img-box\\" style=\\"height:400px;\\"><img src=\\"https://placehold.co/500x500/e2e8f0/64748b?text=Product\\" style=\\"width:100%; height:100%; object-fit:cover;\\"></div><div><span class=\\"u-badge\\">Best Seller</span><h1 class=\\"u-h2\\">Premium Headphones</h1><div class=\\"u-h3\\">$299.00</div><p class=\\"u-p\\">High fidelity sound with noise cancellation.</p><div class=\\"flex-row gap-sm\\" style=\\"margin-bottom:1rem;\\"><button class=\\"u-btn outline\\">-</button><span style=\\"padding:0 10px;\\">1</span><button class=\\"u-btn outline\\">+</button></div><button class=\\"u-btn w-full\\">Add to Cart</button></div></div></div>", "shop_cart_summ": "<div class=\\"u-card\\"><h3>Order Summary</h3><div style=\\"border-bottom:1px solid #e2e8f0; margin-bottom:1rem;\\"><div class=\\"flex-between\\" style=\\"padding:10px 0;\\"><span>Subtotal</span><span>$299.00</span></div><div class=\\"flex-between\\" style=\\"padding:10px 0;\\"><span>Shipping</span><span>$10.00</span></div></div><div class=\\"flex-between\\" style=\\"font-weight:bold; font-size:1.2rem;\\"><span>Total</span><span>$309.00</span></div><button class=\\"u-btn w-full\\" style=\\"margin-top:1rem;\\">Checkout</button></div>", "shop_cat_circles": "<div class=\\"u-card\\"><div class=\\"flex-row\\" style=\\"justify-content:center; gap:2rem;\\"><div class=\\"center-text\\"><div class=\\"u-img-box\\" style=\\"width:80px; height:80px; border-radius:50%; margin-bottom:10px;\\"><img src=\\"https://placehold.co/80x80/e2e8f0/64748b?text=Men\\"></div><span class=\\"u-small\\">Men</span></div><div class=\\"center-text\\"><div class=\\"u-img-box\\" style=\\"width:80px; height:80px; border-radius:50%; margin-bottom:10px;\\"><img src=\\"https://placehold.co/80x80/e2e8f0/64748b?text=Wom\\"></div><span class=\\"u-small\\">Women</span></div><div class=\\"center-text\\"><div class=\\"u-img-box\\" style=\\"width:80px; height:80px; border-radius:50%; margin-bottom:10px;\\"><img src=\\"https://placehold.co/80x80/e2e8f0/64748b?text=Kid\\"></div><span class=\\"u-small\\">Kids</span></div></div></div>", "shop_filter_bar": "<div class=\\"u-card\\"><h4 class=\\"u-h4\\">Filters</h4><div style=\\"margin-bottom:1rem;\\"><p class=\\"u-small\\" style=\\"font-weight:bold;\\">Price</p><input type=\\"range\\" style=\\"width:100%;\\"></div><div><p class=\\"u-small\\" style=\\"font-weight:bold;\\">Category</p><label style=\\"display:block; margin-bottom:5px;\\"><input type=\\"checkbox\\"> Electronics</label><label style=\\"display:block; margin-bottom:5px;\\"><input type=\\"checkbox\\"> Clothing</label></div></div>", "shop_review_row": "<div class=\\"u-card\\"><div class=\\"flex-row gap-sm\\" style=\\"margin-bottom:10px;\\"><div class=\\"u-avatar\\" style=\\"width:30px; height:30px;\\">J</div> <b>John D.</b> <div style=\\"color:#eab308; margin-left:auto;\\"><i class=\\"ri-star-fill\\"></i><i class=\\"ri-star-fill\\"></i><i class=\\"ri-star-fill\\"></i><i class=\\"ri-star-fill\\"></i><i class=\\"ri-star-fill\\"></i></div></div><p class=\\"u-small\\">Great product! Totally worth the price.</p></div>", "fe_blog_feat": "<div class=\\"u-card\\"><div class=\\"grid-2\\"><div class=\\"u-img-box\\" style=\\"height:300px;\\"><img src=\\"https://placehold.co/500x300/e2e8f0/64748b?text=Blog+Post\\" style=\\"width:100%; height:100%; object-fit:cover;\\"></div><div style=\\"display:flex; flex-direction:column; justify-content:center;\\"><span class=\\"u-small\\" style=\\"color:var(--user-primary); font-weight:700;\\">TECHNOLOGY</span><h2 class=\\"u-h2\\">The Future of Web Dev</h2><p class=\\"u-p\\">How AI is changing the landscape...</p><div class=\\"flex-row gap-sm\\"><div class=\\"u-avatar\\">A</div><div class=\\"u-small\\">Author Name \\u2022 5 min read</div></div></div></div></div>", "fe_author_box": "<div class=\\"u-card\\" style=\\"background:#f8fafc; border:none;\\"><div class=\\"flex-row\\" style=\\"gap:1.5rem;\\"><div class=\\"u-avatar\\" style=\\"width:80px; height:80px; font-size:1.5rem;\\">JD</div><div><h3 class=\\"u-h3\\">Jane Doe</h3><p class=\\"u-small\\">Senior Engineer @ Tech. Writing about code, coffee, and cats.</p><div class=\\"flex-row gap-sm\\" style=\\"margin-top:10px;\\"><i class=\\"ri-twitter-fill\\"></i> <i class=\\"ri-github-fill\\"></i></div></div></div></div>", "fe_gallery_grid": "<div class=\\"u-card\\"><h3 class=\\"u-h3\\">Gallery</h3><div style=\\"display:grid; grid-template-columns:repeat(3, 1fr); gap:10px;\\"><div class=\\"u-img-box\\" style=\\"height:200px;\\"><img src=\\"https://placehold.co/300x300/e2e8f0/64748b?text=1\\" style=\\"width:100%; height:100%; object-fit:cover;\\"></div><div class=\\"u-img-box\\" style=\\"height:200px;\\"><img src=\\"https://placehold.co/300x300/e2e8f0/64748b?text=2\\" style=\\"width:100%; height:100%; object-fit:cover;\\"></div><div class=\\"u-img-box\\" style=\\"height:200px;\\"><img src=\\"https://placehold.co/300x300/e2e8f0/64748b?text=3\\" style=\\"width:100%; height:100%; object-fit:cover;\\"></div><div class=\\"u-img-box\\" style=\\"height:200px;\\"><img src=\\"https://placehold.co/300x300/e2e8f0/64748b?text=4\\" style=\\"width:100%; height:100%; object-fit:cover;\\"></div><div class=\\"u-img-box\\" style=\\"height:200px;\\"><img src=\\"https://placehold.co/300x300/e2e8f0/64748b?text=5\\" style=\\"width:100%; height:100%; object-fit:cover;\\"></div><div class=\\"u-img-box\\" style=\\"height:200px;\\"><img src=\\"https://placehold.co/300x300/e2e8f0/64748b?text=6\\" style=\\"width:100%; height:100%; object-fit:cover;\\"></div></div></div>", "fe_project_card": "<div class=\\"u-card\\" style=\\"padding:0;\\"><div class=\\"u-img-box\\" style=\\"height:250px; border-radius:8px 8px 0 0;\\"><img src=\\"https://placehold.co/400x250/e2e8f0/64748b?text=Project\\" style=\\"width:100%; height:100%; object-fit:cover;\\"></div><div style=\\"padding:1.5rem;\\"><h3 class=\\"u-h3\\">Project Title</h3><p class=\\"u-p\\">Short description of the work done.</p><div class=\\"flex-row gap-sm\\"><span class=\\"u-badge\\">React</span><span class=\\"u-badge\\">Node</span></div></div></div>", "mockup_browser": "<div class=\\"u-card\\"><div class=\\"u-mockup-browser\\"><div class=\\"toolbar\\"><div class=\\"dots\\"></div><div class=\\"url\\">https://themestudio.pro</div></div><div class=\\"content\\"><img src=\\"https://placehold.co/800x400/e2e8f0/64748b?text=Website+Preview\\" style=\\"width:100%;\\"></div></div></div>", "mockup_window": "<div class=\\"u-card\\"><div class=\\"u-mockup-window\\"><div class=\\"content\\" style=\\"padding:2rem; text-align:center;\\"><h2>Hello World</h2><p>This is a window mockup.</p></div></div></div>", "mockup_phone": "<div class=\\"u-card center-text\\"><div class=\\"u-mockup-phone\\" style=\\"margin:0 auto;\\"><div class=\\"screen\\" style=\\"background:white; display:flex; align-items:center; justify-content:center;\\">App Content</div></div></div>", "mockup_code": "<div class=\\"u-card dark\\" style=\\"font-family:monospace; padding:0;\\"><div style=\\"background:#334155; padding:10px; display:flex; gap:6px;\\"><div style=\\"width:10px; height:10px; border-radius:50%; background:#ef4444;\\"></div><div style=\\"width:10px; height:10px; border-radius:50%; background:#eab308;\\"></div><div style=\\"width:10px; height:10px; border-radius:50%; background:#22c55e;\\"></div></div><div style=\\"padding:1.5rem; color:#a5b4fc;\\"><span style=\\"color:#c084fc;\\">function</span> <span style=\\"color:#60a5fa;\\">init</span>() {<br>&nbsp;&nbsp;console.<span style=\\"color:#fcd34d;\\">log</span>(<span style=\\"color:#86efac;\\">\\"Hello World\\"</span>);<br>}</div></div>", "mockup_artboard": "<div class=\\"u-card center-text\\" style=\\"background:#ddd;\\"><div style=\\"width:320px; height:568px; background:white; margin:0 auto; box-shadow:0 10px 30px rgba(0,0,0,0.1); display:flex; align-items:center; justify-content:center;\\">320x568 Artboard</div></div>", "mockup_stack": "<div class=\\"u-card\\" style=\\"height:300px; display:flex; align-items:center; justify-content:center;\\"><div class=\\"u-stack\\"><div class=\\"u-card\\" style=\\"background:#fff; width:200px; height:150px; display:flex; align-items:center; justify-content:center;\\">1</div><div class=\\"u-card\\" style=\\"background:#f1f5f9; width:200px; height:150px; display:flex; align-items:center; justify-content:center;\\">2</div><div class=\\"u-card\\" style=\\"background:#e2e8f0; width:200px; height:150px; display:flex; align-items:center; justify-content:center;\\">3</div></div></div>", "timeline_vert": "<div class=\\"u-card\\"><ul class=\\"u-timeline\\"><li class=\\"step active\\"><div><time>1984</time> First Macintosh</div></li><li class=\\"step active\\"><div><time>1998</time> iMac</div></li><li class=\\"step\\"><div><time>2007</time> iPhone</div></li><li class=\\"step\\"><div><time>2026</time> Vision Pro 2</div></li></ul></div>", "timeline_horiz": "<div class=\\"u-card\\"><div class=\\"flex-between\\" style=\\"opacity:0.5;\\"><div class=\\"center-text\\">Start</div><div style=\\"flex:1; height:2px; background:#e2e8f0; margin:0 10px;\\"></div><div class=\\"center-text\\">Middle</div><div style=\\"flex:1; height:2px; background:#e2e8f0; margin:0 10px;\\"></div><div class=\\"center-text\\">End</div></div></div>", "calendar_mock": "<div class=\\"u-card\\" style=\\"max-width:300px; margin:0 auto;\\"><div class=\\"flex-between\\" style=\\"margin-bottom:1rem;\\"><b>October 2026</b> <i class=\\"ri-arrow-right-line\\"></i></div><div style=\\"display:grid; grid-template-columns:repeat(7,1fr); gap:5px; text-align:center; font-size:0.8rem;\\"><div style=\\"opacity:0.5;\\">S</div><div style=\\"opacity:0.5;\\">M</div><div style=\\"opacity:0.5;\\">T</div><div style=\\"opacity:0.5;\\">W</div><div style=\\"opacity:0.5;\\">T</div><div style=\\"opacity:0.5;\\">F</div><div style=\\"opacity:0.5;\\">S</div><div style=\\"padding:5px;\\">1</div><div style=\\"padding:5px;\\">2</div><div style=\\"padding:5px;\\">3</div><div style=\\"padding:5px; background:var(--user-primary); color:white; border-radius:4px;\\">4</div><div style=\\"padding:5px;\\">5</div></div></div>", "diff_view": "<div class=\\"u-card\\"><div class=\\"grid-2\\" style=\\"gap:0;\\"><div style=\\"background:#f8fafc; padding:2rem; text-align:center;\\"><img src=\\"https://placehold.co/200x200/e2e8f0/64748b?text=Before\\" style=\\"margin-bottom:1rem;\\"><h3>Before</h3></div><div style=\\"background:#fff; padding:2rem; text-align:center; border-left:1px solid #e2e8f0;\\"><img src=\\"https://placehold.co/200x200/e2e8f0/64748b?text=After\\" style=\\"margin-bottom:1rem;\\"><h3>After</h3></div></div></div>", "countdown": "<div class=\\"u-card center-text\\"><div class=\\"flex-row\\" style=\\"justify-content:center; gap:2rem;\\"><div class=\\"center-text\\"><div class=\\"value\\" style=\\"font-size:2rem; font-family:monospace;\\">10</div>days</div><div class=\\"center-text\\"><div class=\\"value\\" style=\\"font-size:2rem; font-family:monospace;\\">24</div>hours</div><div class=\\"center-text\\"><div class=\\"value\\" style=\\"font-size:2rem; font-family:monospace;\\">59</div>min</div></div></div>", "chat_start": "<div class=\\"u-card\\"><div class=\\"u-chat start\\"><div class=\\"u-avatar\\">A</div><div class=\\"bubble\\">Hey, is the project ready?</div></div><div class=\\"u-chat start\\"><div class=\\"u-avatar\\">A</div><div class=\\"bubble\\">I need the files by 5pm.</div><div class=\\"u-small\\">Delivered</div></div></div>", "chat_end": "<div class=\\"u-card\\"><div class=\\"u-chat end\\"><div class=\\"bubble primary\\">Yes, I just pushed the changes to GitHub.</div><div class=\\"u-avatar\\">B</div></div><div class=\\"u-chat end\\"><div class=\\"bubble primary\\">Check the latest commit.</div><div class=\\"u-avatar\\">B</div></div></div>", "alert_info": "<div class=\\"u-card\\" style=\\"padding:1rem; border-left:4px solid var(--user-primary); background:#eff6ff;\\"><div class=\\"flex-row gap-sm\\"><i class=\\"ri-information-fill\\" style=\\"color:var(--user-primary);\\"></i> <span>New software update available.</span></div></div>", "alert_success": "<div class=\\"u-card\\" style=\\"padding:1rem; border-left:4px solid #22c55e; background:#f0fdf4;\\"><div class=\\"flex-row gap-sm\\"><i class=\\"ri-checkbox-circle-fill\\" style=\\"color:#22c55e;\\"></i> <span>Purchase confirmed! ID: #12345</span></div></div>", "alert_warning": "<div class=\\"u-card\\" style=\\"padding:1rem; border-left:4px solid #eab308; background:#fefce8;\\"><div class=\\"flex-row gap-sm\\"><i class=\\"ri-alert-fill\\" style=\\"color:#eab308;\\"></i> <span>Warning: Invalid email address.</span></div></div>", "steps_h": "<div class=\\"u-card\\"><div class=\\"flex-row\\" style=\\"gap:1rem; overflow-x:auto;\\"><div class=\\"flex-row gap-sm\\" style=\\"color:var(--user-primary); font-weight:bold;\\"><div class=\\"u-badge\\" style=\\"background:var(--user-primary); color:white;\\">1</div> Register</div><div style=\\"width:20px; height:1px; background:#ccc;\\"></div><div class=\\"flex-row gap-sm\\"><div class=\\"u-badge\\">2</div> Plan</div><div style=\\"width:20px; height:1px; background:#ccc;\\"></div><div class=\\"flex-row gap-sm\\"><div class=\\"u-badge\\">3</div> Purchase</div></div></div>", "radial_progress": "<div class=\\"u-card center-text\\"><div style=\\"position:relative; width:80px; height:80px; border-radius:50%; border:5px solid #e2e8f0; margin:0 auto;\\"><div style=\\"position:absolute; inset:-5px; border:5px solid var(--user-primary); border-radius:50%; clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%); transform:rotate(45deg);\\"></div><div style=\\"position:absolute; inset:0; display:flex; align-items:center; justify-content:center; font-weight:bold;\\">70%</div></div><div style=\\"margin-top:1rem;\\">Loading...</div></div>", "rating_stars": "<div class=\\"u-card center-text\\"><h3>Rate Us</h3><div style=\\"font-size:1.5rem; color:#eab308; cursor:pointer;\\"><i class=\\"ri-star-fill\\"></i><i class=\\"ri-star-fill\\"></i><i class=\\"ri-star-fill\\"></i><i class=\\"ri-star-fill\\"></i><i class=\\"ri-star-line\\" style=\\"color:#e2e8f0;\\"></i></div></div>", "feat_bento": "<div class=\\"u-card\\"><h3 class=\\"u-h3 center-text\\" style=\\"margin-bottom:2rem;\\">Dashboard Features</h3><div style=\\"display:grid; grid-template-columns: 2fr 1fr; gap:1rem;\\"><div class=\\"u-card dark\\" style=\\"min-height:200px; background-image:url(https://placehold.co/400x300/e2e8f0/64748b?text=Analytics+Chart); background-size:cover;\\"><h3 style=\\"background:rgba(0,0,0,0.5); padding:5px;\\">Analytics</h3></div><div class=\\"u-card\\" style=\\"background:#e0f2fe; color:#0369a1;\\"><h3>Mobile</h3><p>iOS & Android</p></div></div><div style=\\"display:grid; grid-template-columns: 1fr 1fr 1fr; gap:1rem; margin-top:1rem;\\"><div class=\\"u-card center-text\\"><i class=\\"ri-secure-payment-line\\" style=\\"font-size:2rem;\\"></i></div><div class=\\"u-card center-text\\"><i class=\\"ri-global-line\\" style=\\"font-size:2rem;\\"></i></div><div class=\\"u-card center-text\\"><i class=\\"ri-customer-service-line\\" style=\\"font-size:2rem;\\"></i></div></div></div>", "feat_tabs": "<div class=\\"u-card\\"><div class=\\"u-tabs\\"><div class=\\"tab active\\">Overview</div><div class=\\"tab\\">Specs</div><div class=\\"tab\\">Reviews</div></div><div style=\\"padding:1rem; border:1px solid #e2e8f0; border-top:none; border-radius:0 0 8px 8px;\\"><p>Here is the overview content.</p></div></div>", "feat_accordion": "<div class=\\"u-card\\"><div style=\\"border:1px solid #e2e8f0; border-radius:8px; overflow:hidden;\\"><div style=\\"padding:1rem; border-bottom:1px solid #e2e8f0; background:#f8fafc; font-weight:600;\\">What is included? <i class=\\"ri-arrow-down-s-line\\" style=\\"float:right;\\"></i></div><div style=\\"padding:1rem; display:none;\\">Everything you see here.</div><div style=\\"padding:1rem; border-bottom:1px solid #e2e8f0; background:#f8fafc; font-weight:600;\\">Can I cancel anytime? <i class=\\"ri-arrow-down-s-line\\" style=\\"float:right;\\"></i></div><div style=\\"padding:1rem;\\">Yes, absolutely.</div></div></div>", "feat_join": "<div class=\\"u-card center-text\\"><h3>Newsletter</h3><div style=\\"display:flex; justify-content:center; margin-top:1rem;\\"><input class=\\"u-input\\" placeholder=\\"Email\\" style=\\"margin:0; border-radius:8px 0 0 8px; width:200px;\\"><button class=\\"u-btn\\" style=\\"border-radius:0 8px 8px 0;\\">Subscribe</button></div></div>", "feat_large_icon": "<div class=\\"u-card center-text\\"><div style=\\"background:#eff6ff; width:80px; height:80px; border-radius:50%; display:flex; align-items:center; justify-content:center; margin:0 auto 1.5rem auto; color:var(--user-primary); font-size:2rem;\\"><i class=\\"ri-rocket-line\\"></i></div><h2 class=\\"u-h2\\">Launch in Minutes</h2><p class=\\"u-p\\">Not months.</p></div>", "feat_grid_4": "<div class=\\"u-card\\"><div class=\\"grid-2\\" style=\\"grid-template-columns:repeat(4,1fr); gap:1rem; text-align:center;\\"><div class=\\"u-card\\"><h5>Speed</h5></div><div class=\\"u-card\\"><h5>Scale</h5></div><div class=\\"u-card\\"><h5>Secure</h5></div><div class=\\"u-card\\"><h5>Support</h5></div></div></div>", "feat_list": "<div class=\\"u-card\\"><h3>Requirements</h3><ul style=\\"list-style:none; padding:0;\\"><li style=\\"padding:10px 0; border-bottom:1px solid #eee;\\"><i class=\\"ri-check-line\\" style=\\"color:green; margin-right:10px;\\"></i> Node.js v18+</li><li style=\\"padding:10px 0; border-bottom:1px solid #eee;\\"><i class=\\"ri-check-line\\" style=\\"color:green; margin-right:10px;\\"></i> 2GB RAM</li><li style=\\"padding:10px 0;\\"><i class=\\"ri-check-line\\" style=\\"color:green; margin-right:10px;\\"></i> SSD Storage</li></ul></div>", "divider_viz": "<div class=\\"u-card\\"><div class=\\"grid-2\\" style=\\"align-items:center;\\"><div class=\\"u-card\\">Content A</div><div style=\\"display:flex; align-items:center; justify-content:center; color:#94a3b8;\\">OR</div><div class=\\"u-card\\">Content B</div></div></div>", "form_login": "<div class=\\"u-card center-text\\" style=\\"max-width:400px; margin:0 auto;\\"><h3>Welcome Back</h3><p class=\\"u-small\\">Enter your credentials to access your account.</p><input class=\\"u-input\\" placeholder=\\"name@company.com\\"><input class=\\"u-input\\" type=\\"password\\" placeholder=\\"\\u2022\\u2022\\u2022\\u2022\\u2022\\u2022\\u2022\\u2022\\"><button class=\\"u-btn w-full\\">Sign In</button><div style=\\"margin-top:1rem; font-size:0.8rem;\\"><a href=\\"#\\">Forgot password?</a></div></div>", "form_contact": "<div class=\\"u-card\\"><h3>Get in Touch</h3><div class=\\"grid-2\\"><input class=\\"u-input\\" placeholder=\\"First Name\\"><input class=\\"u-input\\" placeholder=\\"Last Name\\"></div><input class=\\"u-input\\" placeholder=\\"Subject\\"><textarea class=\\"u-input\\" rows=\\"4\\" placeholder=\\"Your message...\\"></textarea><button class=\\"u-btn\\">Send Message</button></div>", "form_search": "<div class=\\"u-card\\"><div class=\\"flex-row gap-sm\\"><i class=\\"ri-search-line\\" style=\\"color:#94a3b8;\\"></i><input class=\\"u-input\\" placeholder=\\"Search documentation...\\" style=\\"margin:0; flex:1; border:none; background:transparent;\\"><button class=\\"u-btn sm\\">K</button></div></div>", "form_toggle": "<div class=\\"u-card\\"><div class=\\"flex-between\\" style=\\"margin-bottom:10px;\\"><span>Enable Notifications</span> <div class=\\"u-toggle active\\"></div></div><div class=\\"flex-between\\"><span>Dark Mode</span> <div class=\\"u-toggle\\"></div></div></div>", "form_file": "<div class=\\"u-card center-text\\" style=\\"border:2px dashed #cbd5e1; padding:3rem;\\"><i class=\\"ri-upload-cloud-2-line\\" style=\\"font-size:2rem; color:#94a3b8;\\"></i><p>Drag and drop files here</p><button class=\\"u-btn sm outline\\">Browse Files</button></div>", "form_select": "<div class=\\"u-card\\"><label class=\\"u-small\\">Country</label><select class=\\"u-select\\" style=\\"margin-bottom:1rem;\\"><option>United States</option><option>Canada</option></select><label class=\\"u-small\\">Role</label><select class=\\"u-select\\"><option>Developer</option><option>Designer</option></select></div>", "form_login_split": "<div class=\\"u-card\\" style=\\"padding:0; overflow:hidden;\\"><div class=\\"grid-2\\" style=\\"gap:0;\\"><div style=\\"padding:3rem;\\"><h2 class=\\"u-h2\\">Welcome Back</h2><input class=\\"u-input\\" placeholder=\\"Email\\"><input class=\\"u-input\\" type=\\"password\\" placeholder=\\"Password\\"><button class=\\"u-btn w-full\\">Login</button></div><div style=\\"background:url(https://placehold.co/400x400/e2e8f0/64748b?text=Office); background-size:cover;\\"></div></div></div>", "form_contact_map": "<div class=\\"u-card\\"><div class=\\"grid-2\\"><form><h3 class=\\"u-h3\\">Contact Us</h3><input class=\\"u-input\\" placeholder=\\"Name\\"><textarea class=\\"u-input\\" rows=\\"4\\" placeholder=\\"Message\\"></textarea><button class=\\"u-btn\\">Send</button></form><div style=\\"background:#e2e8f0; min-height:300px; border-radius:8px; display:flex; align-items:center; justify-content:center;\\">Map Placeholder</div></div></div>", "ui_buttons": "<div class=\\"u-card\\"><h3>Buttons</h3><div class=\\"flex-row gap-sm\\" style=\\"flex-wrap:wrap;\\"><button class=\\"u-btn\\">Primary</button><button class=\\"u-btn outline\\">Outline</button><button class=\\"u-btn ghost\\">Ghost</button><button class=\\"u-btn sm\\">Small</button><button class=\\"u-btn\\" style=\\"border-radius:50px;\\">Rounded</button><button class=\\"u-btn\\" disabled>Disabled</button></div></div>", "ui_alerts": "<div class=\\"u-card\\"><h3>Alerts</h3><div style=\\"background:#eff6ff; color:#1e40af; padding:10px; border-radius:6px; margin-bottom:10px;\\">Info Alert</div><div style=\\"background:#f0fdf4; color:#166534; padding:10px; border-radius:6px; margin-bottom:10px;\\">Success Alert</div><div style=\\"background:#fef2f2; color:#991b1b; padding:10px; border-radius:6px;\\">Error Alert</div></div>", "nav_simple": "<div class=\\"u-card\\" style=\\"padding:1rem;\\"><div class=\\"flex-between\\"><b>ACME Inc.</b><div class=\\"flex-row gap-sm\\"><a href=\\"#\\" style=\\"color:inherit; text-decoration:none;\\">Product</a><a href=\\"#\\" style=\\"color:inherit; text-decoration:none;\\">Pricing</a><button class=\\"u-btn sm\\">Login</button></div></div></div>", "nav_center": "<div class=\\"u-card\\" style=\\"padding:1rem;\\"><div class=\\"flex-between\\" style=\\"justify-content:center; gap:2rem;\\"><a href=\\"#\\">Home</a><a href=\\"#\\">About</a><b style=\\"font-size:1.2rem;\\">LOGO</b><a href=\\"#\\">Blog</a><a href=\\"#\\">Contact</a></div></div>", "nav_transparent": "<div class=\\"u-card dark\\" style=\\"padding:1rem; border-radius:0;\\"><div class=\\"flex-between\\"><b style=\\"color:white;\\">BRAND</b><div class=\\"flex-row gap-sm\\"><a href=\\"#\\" style=\\"color:white;\\">Work</a><a href=\\"#\\" style=\\"color:white;\\">About</a></div></div></div>", "breadcrumbs": "<div class=\\"u-card\\" style=\\"padding:1rem;\\"><div style=\\"font-size:0.9rem; color:#64748b;\\"><span>Home</span> <span style=\\"margin:0 5px;\\">/</span> <span>Documents</span> <span style=\\"margin:0 5px;\\">/</span> <span style=\\"color:var(--user-primary);\\">Project A</span></div></div>", "footer_simple": "<div class=\\"u-card center-text\\" style=\\"padding:2rem;\\"><b>LOGO</b><p class=\\"u-small\\">\\u00a9 2026 ThemeStudio. All rights reserved.</p></div>", "footer_cols": "<div class=\\"u-card dark\\"><div class=\\"grid-3\\"><div><h4 style=\\"color:white;\\">Company</h4><p class=\\"u-small\\">About</p><p class=\\"u-small\\">Careers</p></div><div><h4 style=\\"color:white;\\">Legal</h4><p class=\\"u-small\\">Privacy</p><p class=\\"u-small\\">Terms</p></div><div><h4 style=\\"color:white;\\">Social</h4><p class=\\"u-small\\">Twitter</p><p class=\\"u-small\\">GitHub</p></div></div></div>", "footer_news": "<div class=\\"u-card\\"><div class=\\"flex-between\\"><div><b>Subscribe to our newsletter</b><p class=\\"u-small\\">Get the latest updates.</p></div><div class=\\"flex-row gap-sm\\"><input class=\\"u-input\\" style=\\"margin:0;\\" placeholder=\\"you@domain.com\\"><button class=\\"u-btn\\">Join</button></div></div></div>", "pagination": "<div class=\\"u-card center-text\\"><div class=\\"flex-row\\" style=\\"justify-content:center; gap:5px;\\"><button class=\\"u-btn outline sm\\">Prev</button><button class=\\"u-btn sm\\">1</button><button class=\\"u-btn outline sm\\">2</button><button class=\\"u-btn outline sm\\">3</button><button class=\\"u-btn outline sm\\">Next</button></div></div>", "nav_logo_center": "<div class=\\"u-card\\" style=\\"padding:1rem;\\"><div class=\\"flex-between\\"><div style=\\"flex:1;\\"><a href=\\"#\\">Menu</a></div><div style=\\"flex:1; text-align:center; font-weight:bold; font-size:1.5rem;\\">LOGO</div><div style=\\"flex:1; text-align:right;\\"><a href=\\"#\\">Cart (0)</a></div></div></div>", "footer_mega": "<div class=\\"u-card dark\\" style=\\"padding:3rem 2rem;\\"><div class=\\"grid-3\\"><div><h4>Company</h4><ul style=\\"list-style:none; padding:0; line-height:2;\\"><li>About Us</li><li>Careers</li><li>Press</li></ul></div><div><h4>Resources</h4><ul style=\\"list-style:none; padding:0; line-height:2;\\"><li>Blog</li><li>Help Center</li><li>Guides</li></ul></div><div><h4>Legal</h4><ul style=\\"list-style:none; padding:0; line-height:2;\\"><li>Privacy</li><li>Terms</li><li>Security</li></ul></div></div><div style=\\"margin-top:2rem; border-top:1px solid #334155; padding-top:1rem; text-align:center; opacity:0.6;\\">\\u00a9 2026 Company Inc.</div></div>"}',
);
let currentRawHTML = "";

function toast(msg) {
  const el = document.getElementById("toast");
  if (el) {
    el.innerText = msg;
    el.classList.add("show");
    setTimeout(() => el.classList.remove("show"), 3000);
  }
}

function switchPanel(t) {
  document
    .querySelectorAll(".panel-section")
    .forEach((el) => el.classList.remove("active"));
  document
    .querySelectorAll(".nav-btn")
    .forEach((el) => el.classList.remove("active"));
  if (t === 1) document.getElementById("panel-theme").classList.add("active");
  if (t === 2) document.getElementById("panel-library").classList.add("active");
  if (t === 3) document.getElementById("panel-builder").classList.add("active");
  const btns = document.querySelectorAll(".nav-btn");
  if (btns[t - 1]) btns[t - 1].classList.add("active");
}

function createWrapper() {
  const wrapper = document.createElement("div");
  wrapper.className = "drag-wrapper";
  wrapper.draggable = true;
  wrapper.innerHTML =
    '<div class="action-bar"><button class="action-btn" title="View Code" onclick="viewCode(this)"><i class="ri-code-s-slash-line"></i></button><button class="action-btn" title="Duplicate" onclick="duplicateComponent(this)"><i class="ri-file-copy-line"></i></button><button class="action-btn" title="Delete" onclick="deleteComponent(this)"><i class="ri-delete-bin-line"></i></button></div>';

  wrapper.addEventListener("dragstart", (e) => {
    e.dataTransfer.effectAllowed = "move";
    wrapper.classList.add("dragging");
    draggedNode = wrapper;
  });
  wrapper.addEventListener("dragend", () => {
    wrapper.classList.remove("dragging");
    draggedNode = null;
  });
  return wrapper;
}

function addTpl(id) {
  const wrapper = createWrapper();
  let htmlContent =
    TEMPLATE_MAP[id] ||
    '<div class="u-card center-text"><h3>' + id + "</h3></div>";
  wrapper.insertAdjacentHTML("beforeend", htmlContent);
  addToCanvas(wrapper);
  toast("Added: " + id);
}

function addToCanvas(el) {
  document.getElementById("empty-msg").style.display = "none";
  document.getElementById("builder-canvas").appendChild(el);
}

function filterLibrary() {
  const q = (document.getElementById("lib-search").value || "").toLowerCase();
  document.querySelectorAll(".comp-btn").forEach((btn) => {
    btn.style.display = btn.innerText.toLowerCase().includes(q)
      ? "flex"
      : "none";
  });
}

function toggleList(header) {
  const list = header.nextElementSibling;
  if (list) {
    const isHidden = list.style.display === "none";
    list.style.display = isHidden ? "grid" : "none";
    header.querySelector("span").innerText = isHidden ? "-" : "+";
  }
}

function duplicateComponent(btn) {
  const wrapper = btn.closest(".drag-wrapper");
  const clone = wrapper.cloneNode(true);
  clone.classList.remove("is-selected");
  wrapper.after(clone);
  toast("Duplicated");
}

function deleteComponent(btn) {
  btn.closest(".drag-wrapper").remove();
  setSelected(null);
}

function viewCode(btn) {
  const wrapper = btn.closest(".drag-wrapper");
  let html = wrapper.innerHTML
    .replace(/<div class="action-bar">.*?<\/div>/, "")
    .trim();
  currentRawHTML = html;
  document.getElementById("chk-include-css").checked = false;
  document.getElementById("code-text").value = currentRawHTML;
  document.getElementById("code-modal").style.display = "flex";
}

function regenerateCode() {
  const includeCss = document.getElementById("chk-include-css").checked;
  const txtArea = document.getElementById("code-text");

  if (!includeCss) {
    txtArea.value = currentRawHTML;
  } else {
    const r = document.documentElement;
    const styles = getComputedStyle(r);
    const vars = `
    --user-primary: ${styles.getPropertyValue("--user-primary")};
    --user-surface: ${styles.getPropertyValue("--user-surface")};
    --user-fg: ${styles.getPropertyValue("--user-fg")};
    --user-muted: ${styles.getPropertyValue("--user-muted")};
    --user-border: ${styles.getPropertyValue("--user-border")};
    --user-radius: ${styles.getPropertyValue("--user-radius")};
    --user-shadow: ${styles.getPropertyValue("--user-shadow")};
    --user-font: ${styles.getPropertyValue("--user-font")};
    --user-font-size: ${styles.getPropertyValue("--user-font-size")};
    --user-fw-body: ${styles.getPropertyValue("--user-fw-body")};
    --user-fw-head: ${styles.getPropertyValue("--user-fw-head")};
    --user-lh: ${styles.getPropertyValue("--user-lh")};
    --user-border-color: ${styles.getPropertyValue("--user-border-color")};
    --user-border-width: ${styles.getPropertyValue("--user-border-width")};
            `;

    const cssBlock = `
<style>
:root { ${vars} }
.u-card { background: var(--user-surface); color: var(--user-fg); padding: 2rem; border-radius: var(--user-radius); box-shadow: var(--user-shadow); border: var(--user-border-width) solid var(--user-border-color); font-family: var(--user-font); font-size: var(--user-font-size); overflow:hidden; }
.u-btn { background: var(--user-primary); color: #fff; border: none; padding: 0.6rem 1.2rem; border-radius: 6px; cursor: pointer; font-weight: 500; font-family: var(--user-font); display:inline-flex; align-items:center; gap:8px; }
.u-btn.outline { background: transparent; border: 1px solid var(--user-border-color); color: var(--user-fg); }
.u-btn.sm { padding: 0.3rem 0.8rem; font-size: 0.8rem; }
.u-btn.w-full { width: 100%; }
.u-input { width: 100%; padding: 0.7rem; border: 1px solid var(--user-border-color); border-radius: 6px; margin-bottom: 12px; display: block; box-sizing: border-box; font-family: inherit; }
.u-h1, .u-h2, .u-h3 { font-family: var(--user-font); font-weight: var(--user-fw-head); margin: 0 0 1rem 0; }
.u-h1 { font-size: 2.5em; } .u-h2 { font-size: 2em; } .u-h3 { font-size: 1.25em; }
.u-p { font-family: var(--user-font); line-height: var(--user-lh); margin: 0 0 1rem 0; opacity: 0.9; font-weight: var(--user-fw-body); }
.u-small { font-size: 0.85em; opacity: 0.7; }
.flex-between { display: flex; justify-content: space-between; align-items: center; flex-wrap:wrap; gap:10px; }
.flex-row { display: flex; align-items: center; }
.gap-sm { gap: 8px; }
.center-text { text-align: center; }
.grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; }
.grid-3 { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 2rem; }
@media (max-width: 600px) { .grid-2, .grid-3 { grid-template-columns: 1fr; } }
.dark { background: #0f172a; color: #fff; }
/* Include Daisy-like patterns here */
</style>
`;
    txtArea.value = cssBlock.trim() + "\n\n" + currentRawHTML;
  }
}

function copyCodeText() {
  const txt = document.getElementById("code-text");
  txt.select();
  document.execCommand("copy");
  toast("Code copied!");
  document.getElementById("code-modal").style.display = "none";
}

// --- INSPECTOR ---
let selectedEl = null;
function getEditableNode(el) {
  if (!el) return null;
  return (
    el.querySelector(
      ".u-h1,.u-h2,.u-h3,.u-h4,.u-p,.u-small,button.u-btn,a,img",
    ) || null
  );
}
function syncInspector() {
  const box = document.getElementById("inspector");
  if (!selectedEl) {
    box.style.display = "none";
    return;
  }
  const node = getEditableNode(selectedEl);
  if (!node) {
    box.style.display = "none";
    return;
  }
  box.style.display = "block";
  const txtIn = document.getElementById("ins-text");
  const txtGroup = document.getElementById("group-text");
  if (node.tagName === "IMG") {
    txtGroup.style.display = "none";
  } else {
    txtGroup.style.display = "block";
    txtIn.value = node.innerText;
  }
  const hrefIn = document.getElementById("ins-href");
  const hrefGroup = document.getElementById("group-href");
  if (node.tagName === "A") {
    hrefGroup.style.display = "block";
    hrefIn.value = node.getAttribute("href") || "#";
  } else {
    hrefGroup.style.display = "none";
  }
  const srcIn = document.getElementById("ins-src");
  const srcGroup = document.getElementById("group-src");
  if (node.tagName === "IMG") {
    srcGroup.style.display = "block";
    srcIn.value = node.getAttribute("src");
  } else {
    srcGroup.style.display = "none";
  }
}
function setSelected(el) {
  if (selectedEl) selectedEl.classList.remove("is-selected");
  selectedEl = el;
  if (selectedEl) {
    selectedEl.classList.add("is-selected");
    syncInspector();
  } else {
    document.getElementById("inspector").style.display = "none";
  }
}
document.addEventListener("click", (e) => {
  if (e.target.id === "builder-canvas") {
    setSelected(null);
    return;
  }
  const wrapper = e.target.closest(".drag-wrapper");
  if (wrapper) {
    setSelected(wrapper);
  }
});
document.getElementById("ins-text").addEventListener("input", (e) => {
  if (selectedEl) {
    const node = getEditableNode(selectedEl);
    if (node && node.tagName !== "IMG") node.innerText = e.target.value;
  }
});
document.getElementById("ins-href").addEventListener("input", (e) => {
  if (selectedEl) {
    const node = getEditableNode(selectedEl);
    if (node && node.tagName === "A") node.setAttribute("href", e.target.value);
  }
});
document.getElementById("ins-src").addEventListener("input", (e) => {
  if (selectedEl) {
    const node = getEditableNode(selectedEl);
    if (node && node.tagName === "IMG")
      node.setAttribute("src", e.target.value);
  }
});

function exportHTML() {
  const canvas = document.getElementById("builder-canvas");
  const content = canvas.innerHTML;
  const cleanDiv = document.createElement("div");
  cleanDiv.innerHTML = content;
  cleanDiv.querySelectorAll(".action-bar").forEach((el) => el.remove());
  cleanDiv
    .querySelectorAll(".is-selected")
    .forEach((el) => el.classList.remove("is-selected"));
  cleanDiv.querySelectorAll(".drag-wrapper").forEach((el) => {
    el.removeAttribute("draggable");
    el.classList.remove("dragging");
  });

  const bodyHtml = cleanDiv.innerHTML;
  const r = document.documentElement;
  const styles = getComputedStyle(r);
  const cssVars = [
    "--user-primary: " + styles.getPropertyValue("--user-primary"),
    "--user-surface: " + styles.getPropertyValue("--user-surface"),
    "--user-fg: " + styles.getPropertyValue("--user-fg"),
    "--user-muted: " + styles.getPropertyValue("--user-muted"),
    "--user-border: " + styles.getPropertyValue("--user-border"),
    "--user-radius: " + styles.getPropertyValue("--user-radius"),
    "--user-shadow: " + styles.getPropertyValue("--user-shadow"),
    "--user-font: " + styles.getPropertyValue("--user-font"),
    "--user-font-size: " + styles.getPropertyValue("--user-font-size"),
    "--user-fw-body: " + styles.getPropertyValue("--user-fw-body"),
    "--user-fw-head: " + styles.getPropertyValue("--user-fw-head"),
    "--user-lh: " + styles.getPropertyValue("--user-lh"),
    "--user-border-color: " + styles.getPropertyValue("--user-border-color"),
    "--user-border-width: " + styles.getPropertyValue("--user-border-width"),
  ].join(";");

  const extraCSS = document.querySelector("style").innerHTML;

  const fileContent = [
    "<!DOCTYPE html>",
    '<html lang="en">',
    "<head>",
    '  <meta charset="UTF-8">',
    '  <meta name="viewport" content="width=device-width, initial-scale=1.0">',
    "  <title>ThemeStudio Export</title>",
    '  <link href="https://cdn.jsdelivr.net/npm/remixicon@4.2.0/fonts/remixicon.css" rel="stylesheet">',
    '  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&family=Roboto:wght@300;400;500;700&family=Open+Sans:wght@300;400;600;700&family=Merriweather:wght@300;400;700&family=Poppins:wght@300;400;500;600;700&family=Roboto+Mono:wght@400;500&display=swap" rel="stylesheet">',
    "  <style>",
    "    :root { " + cssVars + " }",
    "    body { font-family: var(--user-font); background: #f8fafc; margin: 0; padding: 40px; }",
    "    .drag-wrapper { margin-bottom: 20px; }",
    extraCSS,
    "  </style>",
    "</head>",
    "<body>",
    bodyHtml,
    "</body>",
    "</html>",
  ].join("\\n");

  const blob = new Blob([fileContent], { type: "text/html" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "theme_studio_export.html";
  a.click();
}

function updateTheme() {
  const r = document.documentElement;

  const pri = document.getElementById("theme-primary").value;
  const rad = document.getElementById("theme-radius").value;
  const surface = document.getElementById("theme-surface").value;
  r.style.setProperty("--user-primary", pri);
  r.style.setProperty("--user-radius", rad + "px");

  if (surface === "dark") {
    r.style.setProperty("--user-surface", "#1e293b");
    r.style.setProperty("--user-fg", "#f8fafc");
    r.style.setProperty("--user-muted", "#94a3b8");
    r.style.setProperty("--user-border", "#334155");
  } else {
    r.style.setProperty("--user-surface", "#ffffff");
    r.style.setProperty("--user-fg", "#0f172a");
    r.style.setProperty("--user-muted", "#64748b");
    r.style.setProperty("--user-border", "#e2e8f0");
  }

  const font = document.getElementById("theme-font").value;
  const size = document.getElementById("theme-size").value;
  const wBody = document.getElementById("theme-weight-body").value;
  const wHead = document.getElementById("theme-weight-head").value;
  const lh = document.getElementById("theme-lh").value / 10;

  r.style.setProperty("--user-font", font);
  r.style.setProperty("--user-font-size", size + "px");
  r.style.setProperty("--user-fw-body", wBody);
  r.style.setProperty("--user-fw-head", wHead);
  r.style.setProperty("--user-lh", lh);

  const bColor = document.getElementById("theme-border-col").value;
  const bWidth = document.getElementById("theme-border-w").value;
  r.style.setProperty("--user-border-color", bColor);
  r.style.setProperty("--user-border-width", bWidth + "px");

  const shadow = document.getElementById("theme-shadow").value;
  let sVal = "none";
  if (shadow === "sm") sVal = "0 1px 2px 0 rgba(0,0,0,0.05)";
  if (shadow === "md") sVal = "0 4px 6px -1px rgba(0,0,0,0.1)";
  if (shadow === "lg") sVal = "0 10px 15px -3px rgba(0,0,0,0.1)";
  if (shadow === "xl") sVal = "0 20px 25px -5px rgba(0,0,0,0.1)";
  r.style.setProperty("--user-shadow", sVal);
}

function loadMockData() {
  toast("Mock data reloaded (Simulated)");
}
