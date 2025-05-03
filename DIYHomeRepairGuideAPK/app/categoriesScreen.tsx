import { StyleSheet, View, Text, Image, ScrollView, ImageBackground, TouchableOpacity } from "react-native";
import Navbar from "./navbar";
import { useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { WebView } from 'react-native-webview';

type Tutorial = {
    title: string;
    image: any;
    explanation: string;
    video: string;
  };
  
  type CategoryKey = 'plumbing' | 'electrical' | 'carpentry' | 'paintingFinishing' | 'roofingGutters' | 'appliancesRepairs' | 'homeSafetySecurity' | 'flooring' | 'hvac';

  const displayNameMap: Record<CategoryKey, string> = {
    plumbing: 'Plumbing',
    electrical: 'Electrical',
    carpentry: 'Carpentry',
    paintingFinishing: 'Painting & Finishing',
    flooring: 'Flooring',
    roofingGutters: 'Roofing & Gutters',
    appliancesRepairs: 'Appliances Repairs',
    homeSafetySecurity: 'Home Safety & Security',
    hvac: 'Heating, Ventilation, and Air Conditioning',
  };
  

  const ytTutorial: Record<CategoryKey, Tutorial[]> = {
    plumbing: [
        { 
          title: "Leaky Faucet", 
          image: require("../Pictures/Leaky_Faucet_Thumbnail.png"), 
          explanation: "Absolute Solution to Leaky Faucet!", 
          video: 'https://www.youtube.com/embed/8JHpSqu26Nc?si=aa3WI5p7O-apiYmF' 
        },
        { 
          title: "Clogged Drain", 
          image: require("../Pictures/Cloggged_Drains_Thumbnail.png"), 
          explanation: "Quick Fix for Clogged Drain!", 
          video: 'https://www.youtube.com/embed/fKMMAp7mKVQ?si=8ejhFgi_mnQzdEJH' 
        },
        { 
          title: "Running Toilet", 
          image: require("../Pictures/Running_Toilets.png"), 
          explanation: "Fix a Running Toilet Easily!", 
          video: 'https://www.youtube.com/embed/W6IVEuOoKzg?si=wwFtTNVYdAlPIJnC' 
        },
        { 
          title: "Low Water Pressure", 
          image: require("../Pictures/Low_Water_Pressure.png"), 
          explanation: "How to Solve Low Water Pressure!", 
          video: 'https://www.youtube.com/embed/qstKtmBvhDg?si=rZ2xkMvIQBt8jPpD'
        },
        { 
          title: "Pipe Leak Repair", 
          image: require("../Pictures/Pipe_Leaks_&_Bursts.png"), 
          explanation: "How to Repair a Leaking Pipe!", 
          video: 'https://www.youtube.com/embed/_W7OwVYYflM?si=kGE4LYwtstBJ0xEx' 
        },
        { 
            title: "Water Heater Issues", 
            image: require("../Pictures/Water_Heater_Issues.png"), 
            explanation: "Electric water heater not working troubleshooting.", 
            video: 'https://www.youtube.com/embed/5AfvaCJBUek?si=ZH9oOb3MD0ahDV0_' 
          },
          { 
            title: "Garbage Disposal Repair", 
            image: require("../Pictures/Garbage_Disposal_Repair.png"), 
            explanation: "3 Sink Disposal Repairs...More Tips + Tricks!", 
            video: 'https://www.youtube.com/embed/xWapKKapv-A?si=_jOflF4_xq9Msn6c' 
          },
          { 
            title: "Installing New Fixtures", 
            image: require("../Pictures/Installing_New_Fixtures.png"), 
            explanation: "How to Replace & Install Bathroom Sink Faucets", 
            video: 'https://www.youtube.com/embed/5s4g8yVGPA4?si=ke7k8d9WdZsFreDY' 
          },
          { 
            title: "Sump Pump Maintenance", 
            image: require("../Pictures/Sump_Pump_Maintenance.png"), 
            explanation: "Sump Pump Calcium build-up Fix and repair Zoeller Pump", 
            video: 'https://www.youtube.com/embed/jGATz43tkcI?si=6oRcFnOOpAexHbxw' 
          }
      ],
      electrical: [
        { 
            title: "Lighting Fixture", 
            image: require("../Pictures/Lighting_Fixture.png"), 
            explanation: "How to Install a Light Fixture", 
            video: 'https://www.youtube.com/embed/XF4NdfyiDSc?si=6zfClsEg_uAN5u8i' 
        },
        { 
            title: "Outlets & Switches", 
            image: require("../Pictures/Outlets_&_Switches.png"), 
            explanation: "How To Install An Outlet and Light Switch Combo", 
            video: 'https://www.youtube.com/embed/6U0zCGq6Qxs?si=f5KYaieqS6WyQD9S' 
        },
        { 
            title: "Circuit Breakers", 
            image: require("../Pictures/Circuit_Breakers.png"), 
            explanation: "How to Replace a Circuit Breaker", 
            video: 'https://www.youtube.com/embed/s6OGF66IskI?si=VJOv-FEMaJHygxLN' 
        },
        { 
            title: "Wiring", 
            image: require("../Pictures/Wiring.png"), 
            explanation: "Fast, Safe Home Wiring Basics for Switches and Outlets", 
            video: 'https://www.youtube.com/embed/ocj_kdHv1_I?si=Ysx6FJ8Z4qOrU6nl' 
        },
        { 
            title: "Ceiling Fans", 
            image: require("../Pictures/Ceiling_Fans.png"), 
            explanation: "Homeowner DIY: Let's Replace A Ceiling Fan!", 
            video: 'https://www.youtube.com/embed/pjb3yHG1MdY?si=mLLaGW-3sIz7dsJ-' 
        },
        { 
            title: "Home Electrical Safety", 
            image: require("../Pictures/Home_Electrical_Safety.png"), 
            explanation: "What electrical work are you allowed to do in your own home?", 
            video: 'https://www.youtube.com/embed/C6Ua77yewdY?si=wfoZKQ3SGHqpC2Hm' 
        },
        { 
            title: "Doorbells", 
            image: require("../Pictures/Doorbells.png"), 
            explanation: "How To Install Ring Doorbell", 
            video: 'https://www.youtube.com/embed/Nf2eid2i9go?si=xibW4uexqPNd0zXm' 
        },
        { 
            title: "Generators", 
            image: require("../Pictures/Generators.png"), 
            explanation: "Emergency Standby Generator Install", 
            video: 'https://www.youtube.com/embed/MHAiAg_97XI?si=m9aF_3yHVYXLVJvW' 
        },
        { 
            title: "Exhaust Fan", 
            image: require("../Pictures/Exhaust_Fan.png"), 
            explanation: "How to Replace and Install a Bathroom Exhaust Fan", 
            video: 'https://www.youtube.com/embed/Igim_iXOJMQ?si=GvDEAXuoFj3dxxOV' 
        }
    ],
    carpentry: [
        { 
            title: "Doors", 
            image: require("../Pictures/Doors.png"), 
            explanation: "How To Install An Exterior Door In 10 Minutes!", 
            video: 'https://www.youtube.com/embed/arId492a3EY?si=fc-EievZB91DDIX0' 
        },
        { 
            title: "Windows", 
            image: require("../Pictures/Windows.png"), 
            explanation: "How to Install a Window | Window Removal & Installation", 
            video: 'https://www.youtube.com/embed/1qAdrxsL0k8?si=RrRJJmvSXFd26Mm-' 
        },
        { 
            title: "Cabinetry", 
            image: require("../Pictures/Cabinetry.png"), 
            explanation: "How To Install Cabinets By Yourself - IN 6 MINUTES!", 
            video: 'https://www.youtube.com/embed/B2fft07wPI0?si=RWoaFHtCjBlm8IpM' 
        },
        { 
            title: "Furniture Repair Restoration", 
            image: require("../Pictures/Furniture_Repair_Restoration.png"), 
            explanation: "Easy Wood Furniture Repair Restoration", 
            video: 'https://www.youtube.com/embed/Xtgc0FleSec?si=PxzsmsO9HVUch6eA' 
        },
        { 
            title: "Woodworking Basics", 
            image: require("../Pictures/Woodworking_Basics.png"), 
            explanation: "15 woodworking basics you should know", 
            video: 'https://www.youtube.com/embed/m3CqH4DjVlI?si=WnigcBOgLg2fS7Al' 
        },
        { 
            title: "Framing", 
            image: require("../Pictures/Framing.png"), 
            explanation: "How To Frame a Wall - Build a Partition Wall Like a Pro", 
            video: 'https://www.youtube.com/embed/WMb1io9JnJY?si=n1ohEajwBiaOhscr' 
        },
        { 
            title: "Decks", 
            image: require("../Pictures/Deck.png"), 
            explanation: "How To Build a Deck", 
            video: 'https://www.youtube.com/embed/SUxS4QJpeiU?si=hZimFYrdTnMRA5c2' 
        },
        { 
            title: "Flooring Installation", 
            image: require("../Pictures/Flooring_Installation.png"), 
            explanation: "How to Install Laminate Flooring for beginners", 
            video: 'https://www.youtube.com/embed/lP7B9B7WX1E?si=7YE3dsFWtx7uajmp' 
        },
        { 
            title: "Wood Finishing", 
            image: require("../Pictures/Wood_Finishing.png"), 
            explanation: "This SIMPLE wood finish will save you DAYS of shop time!", 
            video: 'https://www.youtube.com/embed/RQ-FEtA0TKU?si=1ND194G-5gI6FoI_' 
        }],
        paintingFinishing: [
            { 
                title: "Wall & Ceiling Painting", 
                image: require("../Pictures/Wall_&_Ceiling_Painting.png"), 
                explanation: "How To Paint Walls And Ceilings", 
                video: 'https://www.youtube.com/embed/gMDP4bWQj2w?si=2j_YkNsXQUGCEn9p' 
            },
            { 
                title: "Exterior Painting", 
                image: require("../Pictures/Exterior_Painting.png"), 
                explanation: "How to Paint House Exterior", 
                video: 'https://www.youtube.com/embed/sGGrc62jiiw?si=ihyblMg6tpUvLuqE' 
            },
            { 
                title: "Staining", 
                image: require("../Pictures/Staining.png"), 
                explanation: "How to Stain Wood", 
                video: 'https://www.youtube.com/embed/s88ljYuOetI?si=ZkknLPnmCMOd7yWL' 
            },
            { 
                title: "Drywall Patching", 
                image: require("../Pictures/Drywall_Patching.png"), 
                explanation: "How to Repair Drywall", 
                video: 'https://www.youtube.com/embed/Fdy9uRvpI-E?si=LCYOOdf-fBJ_ByKR' 
            },
            { 
                title: "Trim & Molding Finishing", 
                image: require("../Pictures/Trim_&_Molding_Finishing.png"), 
                explanation: "How to Install Baseboards - Step-by-Step for Beginners", 
                video: 'https://www.youtube.com/embed/wfsmfJ_tkuk?si=nyYWYDOa3u5TRrxK' 
            },
            { 
                title: "Furniture Refinishing", 
                image: require("../Pictures/Furniture_Refinishing.png"), 
                explanation: "DIY Mid Century Furniture Refinish", 
                video: 'https://www.youtube.com/embed/SaDirPqvWGc?si=3HmhkEPyacpiWdIH' 
            },
            { 
                title: "Textured", 
                image: require("../Pictures/Textured.png"), 
                explanation: "How to Texture a Wall (7 options) Do It Yourself", 
                video: 'https://www.youtube.com/embed/mwN0Fw10ZVA?si=aL5RysvtTVq2aiDj' 
            },
            { 
                title: "Waterproofing", 
                image: require("../Pictures/Waterproofing.png"), 
                explanation: "How to WATERPROOF your Exterior Walls from the Inside", 
                video: 'https://www.youtube.com/embed/lZNvPq6cOQ0?si=t6AzKNRoNTZEWgD0' 
            },
            { 
                title: "Wallpaper Installation", 
                image: require("../Pictures/Wallpaper_Installation.png"), 
                explanation: "HOW TO INSTALL WALLPAPER LIKE A PRO!", 
                video: 'https://www.youtube.com/embed/cV73f4Ywa04?si=sZdnH_ExavHum0BZ' 
            }
        ],
        flooring: [
            { 
                title: "Hardwood Floor Installation", 
                image: require("../Pictures/Hardwood_Floor_Installation.png"), 
                explanation: "Learn How to Install Hardwood Floors", 
                video: 'https://www.youtube.com/embed/DGUes4c1rks?si=VQlWFNgmAeiV9_eW' 
            },
            { 
                title: "Laminate Floor Installation", 
                image: require("../Pictures/Laminate_Floor_Installation.png"), 
                explanation: "How To Install Laminate Flooring For Beginners DIY", 
                video: 'https://www.youtube.com/embed/tTIlXrRH6VU?si=i8Tccg48YiB9iw5C' 
            },
            { 
                title: "Tile Floor Installation", 
                image: require("../Pictures/Tile_Floor_Installation.png"), 
                explanation: "How To Install QuicTile EASY DIY Porcelain Tile", 
                video: 'https://www.youtube.com/embed/2L2GgEsFazw?si=Ceb2R3ZEuiNERpUX' 
            },
            { 
                title: "Vinyl Floor Installation", 
                image: require("../Pictures/Vinyl_Floor_Installation.png"), 
                explanation: "How to Install Peel-and-Stick Vinyl Tile Flooring", 
                video: 'https://www.youtube.com/embed/lMiMkotJb3Y?si=YbXjKsasOO3BnEUX' 
            },
            { 
                title: "Carpet Installation", 
                image: require("../Pictures/Carpet_Installation.png"), 
                explanation: "How to Install Carpet", 
                video: 'https://www.youtube.com/embed/clLiPe9oHtw?si=qWjk2y-3nDKNt1Zf' 
            },
            { 
                title: "Concrete Floor", 
                image: require("../Pictures/Concrete_Floor.png"), 
                explanation: "Resurfacing Concrete Floors with a Self-Leveling Skim Coat.", 
                video: 'https://www.youtube.com/embed/r2QEmviW_d0?si=5Czo-dbQWeYpxbPV' 
            },
            { 
                title: "Subfloor Repair", 
                image: require("../Pictures/Subfloor_Repair.png"), 
                explanation: "How to Remove and Replace a Rotten Subfloor", 
                video: 'https://www.youtube.com/embed/Tzi7rftE7Pw?si=W5woy7tA6uGZUxA9' 
            },
            { 
                title: "Grout Renewal", 
                image: require("../Pictures/Grout_Renewal.png"), 
                explanation: "How to Make Your Bath / Shower Surround Grout Look New Again!", 
                video: 'https://www.youtube.com/embed/Nf-zAMUMC1Y?si=PgsBrek2jktoiNOa' 
            },
            { 
                title: "Waterproofing Control", 
                image: require("../Pictures/Waterproofing_Control.png"), 
                explanation: "Surprising Solution to Waterproof Exterior Walls From the Inside", 
                video: 'https://www.youtube.com/embed/D1eg5hg_AzE?si=LYRdGLdsVV9YofQ-' 
            }
        ],
        roofingGutters: [
            { 
                title: "Roof Leak Repair", 
                image: require("../Pictures/Roof_Leak_Repair.png"), 
                explanation: "Roof Repairs - Stop and Prevent Leaky Shingles and Vents", 
                video: 'https://www.youtube.com/embed/GfTy6Exo7uE?si=zUvA0AlCur5Hs0hW' 
            },
            { 
                title: "Shingle Replacement", 
                image: require("../Pictures/Shingle_Replacement.png"), 
                explanation: "How To REPLACE DAMAGE SHINGLES The Right Way!", 
                video: 'https://www.youtube.com/embed/EB-D_NwJz2I?si=SF62voLCZlf259ri' 
            },
            { 
                title: "Flat Roof Maintenance", 
                image: require("../Pictures/Flat_Roof_Maintenance.png"), 
                explanation: "DIY Flat Roof Repair", 
                video: 'https://www.youtube.com/embed/8oJGjrLummo?si=lI7m5J95A14mpFA_' 
            },
            { 
                title: "Flashing Repair", 
                image: require("../Pictures/Flashing_Repair.png"), 
                explanation: "DIY Liquid Flashing for Roof Leak Repairs", 
                video: 'https://www.youtube.com/embed/0ewNKAKbWfY?si=H2Dft0Zf9o1AOnXB' 
            },
            { 
                title: "Gutter Cleaning", 
                image: require("../Pictures/Gutter_Cleaning.png"), 
                explanation: "How to Clean Gutters | Cleaning Tips", 
                video: 'https://www.youtube.com/embed/IX-pv3cH6Y4?si=2GNEId0uSP3v10OA' 
            },
            { 
                title: "Gutter Installation", 
                image: require("../Pictures/Gutter_Installation.png"), 
                explanation: "HOW TO INSTALL GUTTERS DIY GUIDE", 
                video: 'https://www.youtube.com/embed/COp2Kh0kp2c?si=jQ0ArVbHRBAgAECD' 
            },
            { 
                title: "Roof Insulation", 
                image: require("../Pictures/Roof_Insulation.png"), 
                explanation: "Insulating Attic Ceilings & Cathedral Ceilings", 
                video: 'https://www.youtube.com/embed/gyAMujxceIM?si=zzSeXDcDCVx2syRC' 
            },
            { 
                title: "Storm Damage & Emergency Repairs", 
                image: require("../Pictures/Storm_Damage_&_Emergency_Repairs.png"), 
                explanation: "How To: Tarp a Roof", 
                video: 'https://www.youtube.com/embed/Ox6B5QLpUpc?si=dRGQLdQRG0ZdcEAX' 
            },
            { 
                title: "Moss Removal", 
                image: require("../Pictures/Moss_Removal.png"), 
                explanation: "How to Clean and Get Rid of Roof Moss For GOOD", 
                video: 'https://www.youtube.com/embed/lccbBqCBnIw?si=oEzn0AE1sQHmknZ2' 
            }
        ],
        appliancesRepairs: [
            { 
                title: "Refrigerator & Freezer Repair", 
                image: require("../Pictures/Refrigerator_&_Freezer_Repair.png"), 
                explanation: "Refrigerator Freezer Not Cooling, but Compressor Is Running", 
                video: 'https://www.youtube.com/embed/Q4RdjSsqw4s?si=JdneXXDYvnxNIs_l' 
            },
            { 
                title: "Washer Repair", 
                image: require("../Pictures/Washer_Repair.png"), 
                explanation: "Washer Not Spinning - How to Troubleshoot and Repair", 
                video: 'https://www.youtube.com/embed/b977m2jXcog?si=2S1gMafWtGUtxXhy' 
            },
            { 
                title: "Gas Oven Repair", 
                image: require("../Pictures/Gas_Oven_Repair.png"), 
                explanation: "Gas Oven Won't Heat? Easy DIY Fix", 
                video: 'https://www.youtube.com/embed/c0LMcvqryto?si=-e2YBg11T6goy1qy' 
            },
            { 
                title: "Dishwasher Troubleshooting", 
                image: require("../Pictures/Dishwasher_Troubleshooting.png"), 
                explanation: "How to repair a dishwasher, not draining / cleaning - troubleshoot", 
                video: 'https://www.youtube.com/embed/UF-h0V2LYEU?si=BRA9kOb3rrIVADq1' 
            },
            { 
                title: "Microwave Troubleshooting", 
                image: require("../Pictures/Microwave _Troubleshooting.png"), 
                explanation: "Top Reasons Microwave Is Not Heating — Microwave Oven Troubleshooting", 
                video: 'https://www.youtube.com/embed/PVOJRWceWp0?si=vDkiAYGTsuYa8vaS' 
            },
            { 
                title: "Dryer Troubleshooting", 
                image: require("../Pictures/Dryer_Troubleshooting.png"), 
                explanation: "Dryer Troubleshooting - Top 10 Dryer Problems", 
                video: 'https://www.youtube.com/embed/lAbtibZhqkw?si=77Imned74eXvVrhX' 
            },
            { 
                title: "Electric oven Repair", 
                image: require("../Pictures/Electric_oven_Repair.png"), 
                explanation: "How Do Electric Ovens Work? | Repair & Replace", 
                video: 'https://www.youtube.com/embed/tjwaGoKMQ9Q?si=JU8ExNClJymbtAhK' 
            },
            { 
                title: "Air Conditioner Repair", 
                image: require("../Pictures/Air_Conditioner_Repair.png"), 
                explanation: "Top 5 AC Problems and How to Fix Them", 
                video: 'https://www.youtube.com/embed/GOXgdnRB840?si=S9kuf1qihcWLvpeS' 
            },
            { 
                title: "Small Appliance Fixes", 
                image: require("../Pictures/Small_Appliance_Fixes.png"), 
                explanation: "How to Fix Small Appliances", 
                video: 'https://www.youtube.com/embed/pa9EO7GKt5Q?si=Dwx6Plm3whdZTbLH' 
            }
        ],
        homeSafetySecurity: [
            { 
                title: "Lock Replacement", 
                image: require("../Pictures/Lock_Replacement.png"), 
                explanation: "DIY lock and key replacement - Lost keys or lock not working", 
                video: 'https://www.youtube.com/embed/j_CeVaMTFb8?si=1kzUQIyTsXjSQoLo' 
            },
            { 
                title: "Home Security Systems", 
                image: require("../Pictures/Home_Security_Systems.png"), 
                explanation: "DIY Home Security Systems with Smart Technology", 
                video: 'https://www.youtube.com/embed/tK_MUI9N_8w?si=yGHQqzKMMv5WFncU' 
            },
            { 
                title: "Smoke & Carbon Monoxide Detectors", 
                image: require("../Pictures/Smoke_&_Carbon_Monoxide_Detectors.png"), 
                explanation: "How To Install Smoke and Carbon Monoxide Detectors", 
                video: 'https://www.youtube.com/embed/9ExSgQ5oQBs?si=vfxxNEG8-rooivLI' 
            },
            { 
                title: "Window & Door Security", 
                image: require("../Pictures/Window_&_Door_Security.png"), 
                explanation: "How To Install Sash Jammers | Extra Home Security For UPVC Windows And Doors", 
                video: 'https://www.youtube.com/embed/ssTW9eidxEU?si=MDEqa67QF_wgtfOB' 
            },
            { 
                title: "Outdoor Lighting", 
                image: require("../Pictures/Outdoor_Lighting.png"), 
                explanation: "Outdoor string lights in wooden barrel planters - quick easy DIY tutorial", 
                video: 'https://www.youtube.com/embed/ff5wBXwRLW0?si=x1L7ywuW_HiCLsx4' 
            },
            { 
                title: "Fence Repair", 
                image: require("../Pictures/Fence_Repair.png"), 
                explanation: "Gate Build and Fence Staining", 
                video: 'https://www.youtube.com/embed/wu3WJPWvpnI?si=KUaUV5ViVdh3VwL6' 
            },
            { 
                title: "Childproofing & Baby Safety", 
                image: require("../Pictures/Childproofing_&_Baby_Safety.png"), 
                explanation: "TOP 5 DIY Ways to Babyproof Your Home!", 
                video: 'https://www.youtube.com/embed/P-2fJNf6alY?si=M8vR_L46pL4NW1yx' 
            },
            { 
                title: "Emergency Preparedness", 
                image: require("../Pictures/Emergency_Preparedness.png"), 
                explanation: "10 Items FEMA Says To Add To Your Emergency Kit | Emergency Preparedness", 
                video: 'https://www.youtube.com/embed/cUq5dT1IAAk?si=CWxQ0_DXzu9IA9OQ' 
            },
            { 
                title: "CCTV Camera Installation", 
                image: require("../Pictures/CCTV_Camera_Installation.png"), 
                explanation: "CCTV Camera Installation Out Door How To Install", 
                video: 'https://www.youtube.com/embed/iA4OPM9RN2E?si=Q-_tKV-vTEBMd7jK' 
            }
        ],
        hvac: [
            { 
                title: "Furnace Maintenance & Repair", 
                image: require("../Pictures/Furnace_Maintenance_&_Repair.png"), 
                explanation: "Furnace Maintenance Guide | Repair and Replace", 
                video: 'https://www.youtube.com/embed/1giPLrObYb4?si=eIghtaKaarIyPox4' 
            },
            { 
                title: "Air Conditioner Troubleshooting", 
                image: require("../Pictures/Air_Conditioner_Troubleshooting.png"), 
                explanation: "10 Reasons Why Your AC Is NOT Blowing Cold Air In Your Home! DIY How To FIX!", 
                video: 'https://www.youtube.com/embed/drb2fdVKZlk?si=W6tYu5g_l0VnWXGD' 
            },
            { 
                title: "Thermostat Installation", 
                image: require("../Pictures/Thermostat_Installation.png"), 
                explanation: "How to Install a Smart Thermostat", 
                video: 'https://www.youtube.com/embed/DD113dCPqmg?si=JmpqVbwF0T7Nyg2l' 
            },
            { 
                title: "Air Duct Cleaning & Sealing", 
                image: require("../Pictures/Air_Duct_Cleaning_&_Sealing.png"), 
                explanation: "How to Air Seal Return Air Duct - DIY Duct Sealing | HVAC Duct Sealing DIY", 
                video: 'https://www.youtube.com/embed/gNeOLT9Zg08?si=aPokTSD4VmAMG7oW' 
            },
            { 
                title: "HVAC System Installation", 
                image: require("../Pictures/HVAC_System_Installation.png"), 
                explanation: "How to install a Central AC & Heating System step by step", 
                video: 'https://www.youtube.com/embed/wBn84EtALbI?si=BuBkImq2vW9HLhUp' 
            },
            { 
                title: "Ventilation System Repair", 
                image: require("../Pictures/Ventilation_System_Repair.png"), 
                explanation: "How To Fix An Air Vent With NO Cold Air Or Heat Coming Out!", 
                video: 'https://www.youtube.com/embed/DorMYDwMSxU?si=V7XkuJwNZdBnIf-U' 
            },
            { 
                title: "Filter Replacement & Maintenance", 
                image: require("../Pictures/Filter_Replacement_&_Maintenance.png"), 
                explanation: "Air Con Filter maintenance / Ducted / How to DIY", 
                video: 'https://www.youtube.com/embed/Uan1tIXDhm4?si=o8QGdVIRwD_a2Tus' 
            },
            { 
                title: "Dehumidifier & Humidifier Repair", 
                image: require("../Pictures/Dehumidifier_&_Humidifier_Repair.png"), 
                explanation: "Easy Dehumidifier Fix", 
                video: 'https://www.youtube.com/embed/FhaZJTZJMIg?si=VsxLyelR5E-4VikO' 
            },
            { 
                title: "Energy Efficiency", 
                image: require("../Pictures/Energy_Efficiency.png"), 
                explanation: "5 DIY Ways to Make Your Home More Energy Efficient", 
                video: 'https://www.youtube.com/embed/auv9mTgb8UU?si=gTKqpa5o0e7DQr7I' 
            }
        ],
};

const CategoriesScreen = () => {
    const [openVideo, setOpenVideo] = useState(false);
    const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
    const { category } = useLocalSearchParams();
  
    const categoryParam = typeof category === 'string' ? category : category?.[0];
    const tutorials = categoryParam ? ytTutorial[categoryParam as CategoryKey] || [] : [];

    const handleTutorialClick = (videoURL: string)=> {
        setSelectedVideo(videoURL);
        setOpenVideo(true);
    };

    const handleRemoveTutorial = ()=> {
        setOpenVideo(false);
        setSelectedVideo(null);
    };

    return (
      <View style={styles.root}>
        <ImageBackground source={require('../Pictures/apk_background_photo.jpg')} style={styles.background}>
          <Navbar />
          
          {selectedVideo && openVideo && 
            <View style={styles.tutorialContainer}>
                <TouchableOpacity style={styles.removeBtn} onPress={handleRemoveTutorial}><Text>X</Text></TouchableOpacity>
                <WebView 
                    style={styles.videoTutorial}
                    source={{ uri: selectedVideo }}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    allowsFullscreenVideo={true} // This enables fullscreen mode
                    mediaPlaybackRequiresUserAction={false} />
            </View>
          }
  
          <View style={styles.container}>
          <Text style={styles.categoryName}>{categoryParam ? displayNameMap[categoryParam as CategoryKey]?.toUpperCase() : 'No Category'}
          </Text>
            <ScrollView>
              {tutorials.map((tutorial: Tutorial, key: number) => (
                <View key={key} style={styles.thumbnailContainer}>
                    <TouchableOpacity onPress={()=> handleTutorialClick(tutorial.video)}>
                        <View style={styles.thumbnailBorder}>
                            <Image source={tutorial.image} style={styles.thumbnailImage} />
                        </View>
                        <Text style={styles.thumbnailHeader}>{tutorial.title}</Text>
                        <Text style={styles.description}>{tutorial.explanation}</Text>
                    </TouchableOpacity>
                </View>
              ))}
            </ScrollView>
          </View>
        </ImageBackground>
      </View>
    );
  };
  

const styles = StyleSheet.create({
    root: { flex: 1 },
    background: {
        flex: 1,
        alignItems: 'center',
    },
    container: {
        alignItems: 'center',
        height: 640,
        width: 338,
        padding: 20,
        borderWidth: 1,
        borderColor: '#000',
        marginBottom: 15,
    },
    categoryName: {
        fontSize: 22,
        fontWeight: 'bold',
        fontFamily: 'serif',
        marginBottom: 10
    },  
    thumbnailContainer: {
        backgroundColor: 'white',
        alignItems: 'center',
        elevation: 10,
        width: 296,
        height: 220,
        borderRadius: 20,
        marginBottom: 30,
    },
    thumbnailBorder: {
        marginTop: 8,
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    thumbnailImage: {
        width: 278,
        height: 148,
        borderRadius: 10,
    },
    thumbnailHeader: {
        alignSelf: 'flex-start',
        fontWeight: 'bold',
        paddingLeft: 15,
    },
    description: {
        fontSize: 12,
        alignSelf: 'flex-start',
        paddingLeft: 15,
    },

    tutorialContainer: {
        position: 'absolute',
        alignItems: 'center',
        top: 250,
        borderWidth: 1,
        width: 320,
        height: 280,
        backgroundColor: 'darkblue',
        zIndex: 5,
        borderRadius: 10,
        padding: 10,
    },
    removeBtn: {
        position: 'absolute',
        top: 15,
        right: 20,
        width: 30,
        height: 30,
        backgroundColor: 'white',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 10,
    },
    videoTutorial: {
        width: 295,
        height: 120,
        marginTop: 50,
    },
});

export default CategoriesScreen;