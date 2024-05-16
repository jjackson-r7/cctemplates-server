import xml.etree.ElementTree as ET

def process_general_section(file_path):
    try:
        # Parse the XML file
        doc = ET.parse(file_path)
        root = doc.getroot()
        
        # Initialize output variable as a list
        output = []
        
        # Add content to the output
        output.append("****************************************")
        output.append("*              GENERAL TAB             *")
        output.append("****************************************")
        output.append("")
        
        # Extracting information from the XML
        
        # Name and Description
        scantemplate_name = root.attrib.get('id', 'N/A')
        output.append(f"ScanTemplate Name: {scantemplate_name}")
        
        # Template Description
        for title in root.findall('.//templateDescription'):
            template_description = title.attrib.get('title', 'N/A')
            output.append(f"Template description: {template_description} {title.text.strip()}")
        
        # General Information
        for general in root.findall('.//General'):
            # Asset Discovery enabled / disabled
            asset_discovery = general.attrib.get('disableAssetDiscovery', 'N/A')
            output.append(f"Asset Discovery: {'enabled' if asset_discovery == '0' else 'enabled'}")
           
           #Vuln Scan
            vuln_scan = 'NA'
            for vulns in root.findall('.//General'):
                vuln_scan = vulns.attrib.get('disableVulnScan', "N/A")
            output.append(f"Vulnerability Scan: {'enabled' if vuln_scan == '0' else 'disabled'}")

            #Policy Scan
            policy_scan = 'NA'
            for policys in root.findall('.//General'):
                policy_scan = vulns.attrib.get('disablePolicyScan', "N/A")
            output.append(f"Policy Scan: {'enabled' if policy_scan == '0' else 'disabled'}")

           #invulnerable Storage
            invuln_storage = 'NA'
            for vulnst in root.findall('.//General'):
                invuln_storage = vulnst.attrib.get('invulnerableStorage', "N/A")
            output.append(f"Invulnerable Storage: {'enabled' if invuln_storage == 'on' else 'disabled'}")

           #auto disc / use credentials
            cred_scan = 'NA'
            for creds in root.findall('.//General'):
                cred_scan = creds.attrib.get('enableAuthDisc', "N/A")
            output.append(f"Use Credentials: {'enabled' if cred_scan == '1' else 'disabled'}")

           #Webspider
            webspider = 'NA'
            for spider in root.findall('.//General'):
                webspider = spider.attrib.get('disableWebSpider', "N/A")
            output.append(f"WebSpider: {'enabled' if webspider == '0' else 'disabled'}")

           #Fingerprinting
            fingerprinting = 'NA'
            for fing in root.findall('.//General'):
                fingerprinting = fing.attrib.get('enableFingerprinting', "N/A")
            output.append(f"Fingerprinting: {'enabled' if fingerprinting == '1' else 'disabled'}")

           #Windows Path Resolver
            winpath = 'NA'
            for win in root.findall('.//General'):
                winpath = win.attrib.get('enableWindowsPathResolver', "N/A")
            output.append(f"Windows FileSystem Search / Windows Path Resolver: {'enabled' if winpath == '1' else 'disabled'}")

           #Enhanced Logging
            enhanced_logging = 'N/A'
            for level in root.findall('.//Logging/debugLogging'):
                enhanced_logging = level.attrib.get('enabled', 'N/A')
            output.append(f"Enhanced logging: {'enabled' if enhanced_logging == '1' else 'disabled'}")
            
            # Windows Service Editor
            win_service_editor = general.find('.//Plugin/param[@name="windowsServiceEditor"]')
            win_service_editor = win_service_editor.text if win_service_editor is not None else 'N/A'
            output.append(f"Enable Windows Service during a scan: {'enabled' if win_service_editor == '1' else 'disabled'}")
             
            # Maximum assets and scan processes
            scan_threads = general.find('.//scanThreads')
            scan_threads = scan_threads.text if scan_threads is not None else 'N/A'
            output.append(f"Maximum assets scanned simultaneously per Scan Engine: {scan_threads}")
            host_threads = general.find('.//hostThreads')
            host_threads = host_threads.text if host_threads is not None else 'N/A'
            output.append(f"Maximum scan processes simultaneously on each Asset: {host_threads}")
        
        # Join the output lines into a single string
        return '\n'.join(output)
    except Exception as e:
        return f"Error processing the uploaded file: {str(e)}"


def asset_discovery(file_path):
    try:
        # Parse the XML file
        doc = ET.parse(file_path)
        root = doc.getroot()
        
        # Initialize output variable as a list
        output = []
        
        output.append("******************************")
        output.append("*     ASSET DISCOVERY TAB    *")
        output.append("******************************")
        output.append("")

        # Verify Live Assets
        # ICMP PING
        for ICMP in root.findall('.//CheckHosts/icmpHostCheck'):
            ICMPPING = ICMP.attrib.get('enabled')
            if ICMPPING is not None:
                output.append(f"Send ICMP 'pings': {'enabled' if ICMPPING == '1' else 'disabled'}")
            else:
                output.append("Send ICMP 'pings': Unknown")
                
        # ARP PING
        for ARP in root.findall('.//CheckHosts/arpHostCheck'):
            ARPPING = ARP.attrib.get('enabled')
            if ARPPING is not None:
                output.append(f"Send ARP 'pings': {'enabled' if ARPPING == '1' else 'disabled'}")
            else:
                output.append("Send ARP 'pings': Unknown")

        # TCP packets to ports
        for TCPchk in root.findall('.//CheckHosts/TCPHostCheck'):
            TCPCHECK = TCPchk.attrib.get('enabled')
            if TCPCHECK is not None:
                output.append(f"Send TCP packets to ports: {'enabled' if TCPCHECK == '1' else 'disabled'}")
            else:
                output.append("Send TCP packets to ports: Unknown")

            TCP_ports = root.find(".//CheckHosts/TCPHostCheck/portList")
            # Check if TCP_ports is empty
            if TCP_ports is not None and TCP_ports.text:
                TCP_ports_text = TCP_ports.text
            else:
                TCP_ports_text = "None"
            output.append("The Following TCP ports are added to the inclusion list:" + TCP_ports_text)

        # UDP packets to ports
        for UDPchk in root.findall('.//CheckHosts/UDPHostCheck'):
            UDPCHECK = UDPchk.attrib.get('enabled')
            if UDPCHECK is not None:
                output.append(f"Send UDP packets to ports: {'enabled' if UDPCHECK == '1' else 'disabled'}")
            else:
                output.append("Send UDP packets to ports: Unknown")

            UDP_ports = root.find(".//CheckHosts/UDPHostCheck/portList")
            # Check if TCP_ports is empty
            if UDP_ports is not None and UDP_ports.text:
                UDP_ports_text = udp_ports.text
            else:
                UDP_ports_text = "None"
            output.append("The Following UDP ports are added to the inclusion list:" + UDP_ports_text)

        # TCP reset
        for tcprst in root.findall('.//CheckHosts/ignoreTCPReset'):
            TCPRESET = tcprst.attrib.get('enabled')
            if TCPRESET is not None:
                output.append(f"Do not treat TCP resets as live assets: {'enabled' if TCPRESET == '1' else 'disabled'}")
            else:
                output.append("Do not treat TCP resets as live assets: Unknown")
        
        # Find other assets on the network
        for devdisc in root.findall('.//networkDiscovery'):
            devicediscovery = devdisc.attrib.get('enabled')
            if devicediscovery is not None:
                output.append(f"Find other assets on the network: {'enabled' if devicediscovery == '1' else 'disabled'}")
            else:
                output.append("Find other assets on the network: Unknown")
        
         # Collect Whois Information
        whois = root.find(".//Plugin/param[@name='doWhoisLookups']")
        if whois is not None:
            whois_value = whois.text
            if whois_value == '1':
                output.append("Collect WhoIS information: enabled")
            elif whois_value == '0':
                output.append("Collect WhoIS information: disabled")
        else:
            output.append("Collect WhoIS information: Unknown")
                
        # Fingerprint IP stacks
        fingerprintip = root.find(".//Plugin/param[@name='ipFingerprintEnabled']")
        if fingerprintip is not None:
            fingerprintip_value = fingerprintip.text
            if fingerprintip_value == '1':
                output.append("Fingerprint TCP/IP Stack: enabled")
            elif fingerprintip_value == '0':
                output.append("Fingerprint TCP/IP Stack: disabled")
        else:
            output.append("Fingerprint TCP/IP Stack: Unknown")
    
        # Fingerprint retries
        fingerretries = root.find(".//Plugin/param[@name='ipFingerprintEnabled']")
        if fingerretries is not None:
            osguestretry = fingerretries.text
            output.append(f"Fingerprint retries: {osguestretry}")
        else:
            output.append("Fingerprint retries: Unknown")

        # Minimum certainty
        mincert = root.find(".//Plugin/param[@name='ipFingerprintLowThreshold']")
        if mincert is not None:
            minicert = mincert.text
            output.append(f"Minimum Certainty (0.0 - 1.0): {minicert}")
        else:
            output.append("Minimum Certainty (0.0 - 1.0): Unknown")

        # Unauthorized MAC Addresses
        unauthmac = root.find(".//Plugin/param[@name='trustedMacAddressFile']")
        if unauthmac is not None:
            unmac = unauthmac.text
            output.append(f"Unauthorized MAC Addresses: {unmac}")
        else:
            output.append("Unauthorized MAC Addresses: Unknown")
        
        return '\n'.join(output)
    except Exception as e:
        print("Exception:", e)
        return f"Error processing the asset discovery section: {str(e)}"

def service_discovery(file_path):
    try:
        # Parse the XML file
        doc = ET.parse(file_path)
        root = doc.getroot()
        
        # Initialize output variable as a list
        output = []
        output.append("")
        output.append("**********************************")
        output.append("*     SERVICE DISCOVERY TAB      *")
        output.append("**********************************")

        output.append("")
        output.append("!!!!!NOTE!!!!! CUSTOMERS WILL RUN INTO ISSUES IF SCANNING ALL AVAILABLE PORTS! RECOMMEND AGAINST THIS IF YOU SEE IT")
        output.append("")
        
        # TCP SCANNING    
        output.append("TCP SCANNING:")
        
        tcp_port_scan = root.find(".//ServiceDiscovery/TCPPortScan")
        if tcp_port_scan is not None:
            tcpscanmethod = tcp_port_scan.attrib.get('mode', 'Unknown')
            output.append("TCP Scanning Mode - <default (well known ports) | full (All ports) | none> : " + tcpscanmethod)
            
            portstoscan = tcp_port_scan.attrib.get('method', 'Unknown')
            output.append("TCP Scanning Method - <FULL | SYN | SYN+RST | SYN+FIN | SYN+ECE > : " + portstoscan)
            
        else:
            output.append("TCP Scanning Method: none")

        tcp_port_scanlist = root.find(".//ServiceDiscovery/TCPPortScan/portList")
        if tcp_port_scanlist is not None and tcp_port_scanlist.text:
            tcp_port_scanlist_text = tcp_port_scanlist.text
        else:
            tcp_port_scanlist_text = "None"
        output.append("Additional TCP Ports: " + tcp_port_scanlist_text)
       
        excl_tcp_port_scanlist = root.find(".//ServiceDiscovery/ExcludedTCPPortScan/portList")
        if excl_tcp_port_scanlist is not None and excl_tcp_port_scanlist.text:
            excl_tcp_port_scanlist_text = excl_tcp_port_scanlist.text
        else:
            excl_tcp_port_scanlist_text = "None"
        output.append("Excluded TCP Ports: " + excl_tcp_port_scanlist_text)

        # UDP SCANNING
        output.append("")
        output.append("UDP SCANNING:")
        
        udp_port_scan = root.find(".//ServiceDiscovery/UDPPortScan")
        if udp_port_scan is not None:
            udpscanmethod = udp_port_scan.attrib.get('mode', 'Unknown')
            output.append("UDP Scanning Mode - <default (well known ports) | full (All ports) | none> : " + udpscanmethod) 
        else:
            output.append("UDP Scanning Method: Unknown")

        udp_port_scanlist = root.find(".//ServiceDiscovery/UDPPortScan/portList")
        if udp_port_scanlist is not None and udp_port_scanlist.text:
            udp_port_scanlist_text = udp_port_scanlist.text
        else:
            udp_port_scanlist_text = "None"
        output.append("Additional UDP Ports: " + udp_port_scanlist_text)
        
        excluded_udp_ports = root.find(".//ServiceDiscovery/ExcludedUDPPortScan/portList")
        if excluded_udp_ports is not None and excluded_udp_ports.text:
            excluded_udp_ports_text =  excluded_udp_ports.text
        else:
            excluded_udp_ports_text = "None"
        output.append("Excluded UDP Ports: " + excluded_udp_ports_text)

        
        # Service names file
        output.append("")
        output.append("Service Names File: ")
        service_names_file = root.find(".//Plugin/param[@name='defaultServicePropertiesFile']")
        if service_names_file is not None:
            output.append(service_names_file.text)
        else:
            output.append("Unknown")

        return '\n'.join(output)
    except Exception as e:
        return f"Error processing the service discovery section: {str(e)}"

def discovery_performance(file_path):
    try:
        doc = ET.parse(file_path)
        root = doc.getroot()

        output = []
        output.append("")
        output.append("*************************************")
        output.append("*      DISCOVERY PERFORMANCE TAB    *")
        output.append("*************************************")    

        output.append("")
        output.append("!!!!!!!!NOTE!!!!!!!! PACKETS PER SECOND SHOULD BE CALCULATED BY MULTIPLYING THE DEFAULT RATES WTH THE NUMBER OF ENGINES IN THE POOL. Example : 3 engine pool would be min rate of : 2000 x3 and max rate of 15000x3 ")
        output.append("")

        # Discovery Performance
        output.append("Maximum Retries: ")
        for param in root.findall(".//DiscoveryPerformance/MaxRetries"):
            output.append("Retries Limit: " + param.attrib.get('maxretries', 'N/A'))

        output.append("")
        output.append("Timeout Interval Settings: ")
        for param in root.findall(".//DiscoveryPerformance/InitTimeout"):
            output.append("Initial Timeout Interval: " + param.attrib.get('inittimeout', 'N/A'))

        output.append("")
        output.append("Timeout Interval: ")
        for param in root.findall(".//DiscoveryPerformance/MinTimeout"):
            output.append("Minimum Timeout: " + param.attrib.get('mintimeout', 'N/A'))
        for param in root.findall(".//DiscoveryPerformance/MaxTimeout"):
            output.append("Maximum Timeout: " + param.attrib.get('maxtimeout', 'N/A'))

        output.append("")
        output.append('Scan Delay')
        for param in root.findall(".//DiscoveryPerformance/MinScanDelay"):
            output.append("minimum scan delay: " + param.attrib.get('minscandelay', 'N/A'))
        for param in root.findall(".//DiscoveryPerformance/MaxScanDelay"):
            output.append("Maximum scan delay: " + param.attrib.get('maxscandelay', 'N/A'))

        output.append("")
        output.append('Packets per second rate')
        for param in root.findall(".//DiscoveryPerformance/DefeatRate"):
            defeatrate = param.attrib.get('enabled', 'N/A')
            if defeatrate == '1':
                output.append("Defeat rate: enabled")
            elif defeatrate == '0':
                output.append("Defeat rate: disabled")

        for param in root.findall(".//DiscoveryPerformance/MinRate"):
            output.append("Minimum rate: " + param.attrib.get('minrate', 'N/A'))
        for param in root.findall(".//DiscoveryPerformance/MaxRate"):
            output.append("Maximum rate: " + param.attrib.get('maxrate', 'N/A'))

        output.append("")
        output.append("PARALLELISM")

        for param in root.findall(".//DiscoveryPerformance/MinParallelism"):
            output.append("Minimum simultaneous requests: " + param.attrib.get('minparallelism', 'N/A'))
        for param in root.findall(".//DiscoveryPerformance/MaxParallelism"):
            output.append("Maximum simultaneous requests: " + param.attrib.get('maxparallelism', 'N/A'))

        return '\n'.join(output)
    except Exception as e:
        return f"Error processing the discovery performance section: {str(e)}"

def vulnerability_checks(file_path):
    try:
        # Parse the XML file
        doc = ET.parse(file_path)
        root = doc.getroot()

        # Initialize output variable as a list
        output = []

        output.append("")
        output.append("***********************************")
        output.append("*     VULNERABILITY CHECKS TAB    *")
        output.append("***********************************")
        output.append("")

        # Check Configuration
        output.append("")
        output.append("CHECK CONFIGURATION:")
        # Perform unsafe checks
        for vunsafe in root.findall(".//VulnerabilityChecks"):
            unsafe = vunsafe.attrib.get('unsafe', 'N/A')
            output.append(f"Unsafe Checks: {'enabled' if unsafe == '1' else 'disabled'}")
        # Include potential vulnerability checks
        for vpotential in root.findall(".//VulnerabilityChecks"):
            vulnpotential = vpotential.attrib.get('potential', 'N/A')
            output.append(f"Potential Vulnerability Checks: {'enabled' if vulnpotential == '1' else 'disabled'}")
        # Correlate reliable checks with regular checks
        for vcorrelate in root.findall(".//VulnerabilityChecks"):
            correlate = vcorrelate.attrib.get('correlate', 'N/A')
            output.append(f"Correlate reliable checks with regular checks: {'enabled' if correlate == '1' else 'disabled'}")
        # Skip checks performed by the insight agent
        for vskipauth in root.findall(".//VulnerabilityChecks"):
            skipauth = vskipauth.attrib.get('skipAuth', 'N/A')
            output.append(f"Skip checks performed by the insight agent: {'enabled' if skipauth == '1' else 'disabled'}")
        # Use Metasploit Remote check Service when available
        for vmetasploit in root.findall(".//VulnerabilityChecks"):
            metasploit = vmetasploit.attrib.get('metasploitChecks', 'N/A')
            output.append(f"Use Metasploit remote check service when available: {'enabled' if metasploit == '1' else 'disabled'}")
        # Enable Scanning Diagnostic Checks
        for vdiag in root.findall(".//VulnerabilityChecks"):
            diag = vdiag.attrib.get('diagnosticChecks', 'N/A')
            output.append(f"Enable scanning diagnostic checks: {'enabled' if diag == '1' else 'disabled'}")

        # Store invulnerable results
        for invulnr in root.findall(".//General"):
            invuln = invulnr.attrib.get('invulnerableStorage', 'N/A')
            output.append(f"Store invulnerable results: {'enabled' if invuln == 'on' else 'disabled'}")

        # Disabled checks
        output.append("")
        output.append("Checks that are specifically marked as disabled:")
        for dischecks1 in root.findall(".//VulnerabilityChecks/Disabled/VulnCategory"):
            dchecks = dischecks1.attrib.get('name', 'N/A')
            output.append("Category: " + dchecks)
        for dischecks2 in root.findall(".//VulnerabilityChecks/Disabled/CheckType"):
            dchecks = dischecks2.attrib.get('name', 'N/A')
            output.append("CheckType: " + dchecks)
        for dischecks3 in root.findall(".//VulnerabilityChecks/Disabled/Check"):
            indchecks = dischecks3.attrib.get('id', 'N/A')
            output.append("Individual check: " + indchecks)

        # Enabled checks
        output.append("")
        output.append("Checks that are specifically marked as enabled:")
        for enchecks1 in root.findall(".//VulnerabilityChecks/Enabled/VulnCategory"):
            echecks = enchecks1.attrib.get('name', 'N/A')
            output.append("Category: " + echecks)
        for enchecks2 in root.findall(".//VulnerabilityChecks/Enabled/CheckType"):
            echecks = enchecks2.attrib.get('name', 'N/A')
            output.append("CheckType: " + echecks)
        for enchecks3 in root.findall(".//VulnerabilityChecks/Enabled/Vuln"):
            indchecks = enchecks3.attrib.get('id', 'N/A')
            output.append("Individual check: " + indchecks)

        # Join the output lines into a single string
        return '\n'.join(output)
    except Exception as e:
        return f"Error processing the vulnerability checks: {str(e)}"

def scan_assistant(file_path):
    try:
        # Parse the XML file
        doc = ET.parse(file_path)
        root = doc.getroot()

        # Initialize output variable as a list
        output = []

        output.append("")
        output.append("*****************************")
        output.append("*     SCAN ASSISTANT TAB    *")
        output.append("*****************************")
        output.append("")  
        
        #rotate certificate
        for rotatecert in root.findall(".//ScanAssistant"):
            rcert = rotatecert.attrib.get('rotateCerts', 'N/A')
            output.append("Rotate Certificates: enabled" if rcert == '1' else "Rotate Certificates: disabled")

        #Apply updates
        for sapplyupdates in root.findall(".//ScanAssistant"):
            applyupdates = sapplyupdates.attrib.get('applyUpdates', 'N/A')
            output.append("Apply Updates : enabled" if applyupdates == '1' else "Apply Updates : disabled")

        return '\n'.join(output)
    except Exception as e:
        return f"Error processing the discovery performance section: {str(e)}"

import xml.etree.ElementTree as ET

def file_search(file_path):
    try:
        # Parse the XML file
        doc = ET.parse(file_path)
        root = doc.getroot()

        # Initialize output variable as a list
        output = []
    
        output.append("")
        output.append("*************************")
        output.append("*    FILE SEARCH TAB    *")
        output.append("*************************")
        output.append("")      

        # Adding a file search
        found_file_search = False  # Flag to indicate if any file search was found
        for fsearch in root.findall(".//FileSearching/fileFilter"):
            found_file_search = True
            filesearch1 = fsearch.attrib.get('patternType', 'Unknown')
            filesearch2 = fsearch.attrib.get('enabled', 'Unknown')
            filesearch3 = fsearch.attrib.get('name', 'Unknown')
            filesearch4 = fsearch.text.strip() if fsearch.text else 'Unknown'
            
            # Output each variable regardless of whether there is parsed output or not
            output.append(f"File search Listing: Pattern Type: {filesearch1}")
            output.append("Filesearch is enabled" if filesearch2 == '1' else "Filesearch is disabled")
            output.append(f"File name: {filesearch3}")
            output.append(f"File text: {filesearch4}")

        # If no file search was found, provide a message
        if not found_file_search:
            output.append("No file search information found.")
        
        return '\n'.join(output)
    except Exception as e:
        return f"Error processing the file search section: {str(e)}"



def spam_relay(file_path):
    try:
        # Parse the XML file
        doc = ET.parse(file_path)
        root = doc.getroot()

        # Initialize output variable as a list
        output = []
        output = []
        output.append("")
        output.append("***************************")
        output.append("*    SPAM RELAYING TAB    *")
        output.append("***************************")
        output.append("")     
        
        #Spam Relay
        for sspam in root.findall(".//Plugin/[@name='java/HttpScanner']/param/[@name='spamRecipient']"):
            spamr = sspam.text
            output.append(f"External email address: {spamr}")
        
        for sspamr in root.findall(".//Plugin/param/[@name='HTTP_REFERER']"):
            spamrr = sspamr.text
            output.append(f"HTTP_REFERER to use: {spamrr}")
        
        return '\n'.join(output)
    except Exception as e:
        return f"Error processing the discovery performance section: {str(e)}"

def database(file_path):
    result = ""
    try:
        tree = ET.parse(file_path)
        root = tree.getroot()

        output = []
        output.append("*********************")
        output.append("*    DATABASE TAB   *")
        output.append("*********************")
        output.append("")  
        output.append("")

        # Postgres database to connect to
        for ddb2 in root.findall(".//Plugin/[@name='java/Db2Scanner']/param/[@name='Default_Database']"):
            db2 = ddb2.text
            result += f"Postgres Database to connect to: {db2}\n"

        # DB2 Database to connect to:
        for PostgreSQL in root.findall(".//Plugin/[@name='java/PostgresScanner']/param/[@name='Default_Database']"):
            postgres = PostgreSQL.text
            result += f"DB2 Database to connect to: {postgres}\n"

        # Oracle Instances
        for DOracle in root.findall(".//Plugin/[@name='java/OracleScanner']/param/[@name='Default_Databases']"):
            oracle = DOracle.text
            result += f"Oracle instance (SIDs) to connect to: {oracle}\n"
    except Exception as e:
        result += f"Error processing database section: {str(e)}\n"
    return '\n'.join(output) + result

def mail_servers(file_path):
    result = ""
    try:
        tree = ET.parse(file_path)
        root = tree.getroot()

        output = []
        output.append("**************************")
        output.append("*    MAIL SERVERS TAB    *")
        output.append("**************************")
        output.append("")  
        output.append("")

        # read timeout
        for mreadtimeout in root.findall(".//Plugin/[@name='java/SmtpScanner']/param/[@name='readTimeout']"):
            readtimeout = mreadtimeout.text
            result += f"Read timeout (ms): {readtimeout}\n"

        # inaccurate time difference
        for mtimeaccuracy in root.findall(".//Plugin/[@name='java/SmtpScanner']/param/[@name='timeAccuracyThreshold']"):
            timeaccuracy = mtimeaccuracy.text
            result += f"Inaccurate time differences (ms): {timeaccuracy}\n"
    except Exception as e:
        result += f"Error processing mail servers section: {str(e)}\n"
    return '\n'.join(output) + result

def cvs_servers(file_path):
    result = ""
    try:
        tree = ET.parse(file_path)
        root = tree.getroot()

        output = []
        output = []
        output.append("**************************")
        output.append("*    CVS SERVERS TAB     *")
        output.append("**************************")
        output.append("") 
        output.append("")

        # CVS repository root directory field
        for ccvs in root.findall(".//Plugin/[@name='java/CvsScanner']/param/[@name='CVS_Repository_Root']"):
            cvs = ccvs.text
            result += f"CVS repository root directory field: {cvs}\n"
    except Exception as e:
        result += f"Error processing CVS servers section: {str(e)}\n"
    return result

def dhcp_servers(file_path):
    result = ""
    try:
        tree = ET.parse(file_path)
        root = tree.getroot()
        
        output = []
        output = []
        output.append("***************************")
        output.append("*     DHCP SERVERS TAB    *")
        output.append("***************************")
        output.append("") 
        output.append("")

        # dhcp address range
        for dhcps in root.findall(".//Plugin/[@name='java/DhcpScanner']/param/[@name='DHCP_Pool_Range']"):
            dhcp = dhcps.text
            result += f"DHCP address range field: {dhcp}\n"
    except Exception as e:
        result += f"Error processing DHCP servers section: {str(e)}\n"
    return '\n'.join(output) + result

def telnet_servers(file_path):
    result = ""
    try:
        tree = ET.parse(file_path)
        root = tree.getroot()

        output = []
        output = []
        output.append("*****************************")
        output.append("*     TELNET SERVERS TAB    *")
        output.append("*****************************")
        output.append("") 
        output.append("")


        # Characters set to use field:
        for charst in root.findall(".//Plugin/[@name='java/TelnetScanner']/param/[@name='terminalCharset']"):
            chars = charst.text
            result += f"Character set to use: {chars}\n"

        # Regex for login prompt
        for tloginp in root.findall(".//Plugin/[@name='java/TelnetScanner']/param/[@name='regexLoginPrompts']"):
            loginp = tloginp.text
            result += f"Regex for login prompt: {loginp}\n"

        # Regex for password prompt
        for ppasswordp in root.findall(".//Plugin/[@name='java/TelnetScanner']/param/[@name='regexPasswordPrompts']"):
            passwordp = ppasswordp.text
            result += f"Regex for password prompt: {passwordp}\n"

        # Regex for failed logins
        for pflogin in root.findall(".//Plugin/[@name='java/TelnetScanner']/param/[@name='regexFailedLoginMsg']"):
            floginp = pflogin.text
            result += f"Regex for failed logins: {floginp}\n"

        # Regex for questionable logins
        for tqlogin in root.findall(".//Plugin/[@name='java/TelnetScanner']/param/[@name='regexFalseNegativeMsg']"):
            qlogin = tqlogin.text
            result += f"Regex for questionable logins: {qlogin}\n"
    except Exception as e:
        result += f"Error processing Telnet servers section: {str(e)}\n"
    return '\n'.join(output) + result

def policy_manager(file_path):
    result = ""
    try:
        tree = ET.parse(file_path)
        root = tree.getroot()

        output = []
        output.append("******************************")
        output.append("*     POLICY MANAGER  TAB    *")
        output.append("******************************")
        output.append("")
        output.append("")

        # Store SCAP data checkbox
        scapd_element = root.find(".//Policies/persistARFResults")
        if scapd_element is not None:
            scapd = scapd_element.attrib.get('enabled', 'N/A')
            result += f"Store SCAP Data: {'enabled' if scapd == '1' else 'disabled'}\n"
        else:
            result += "Store SCAP Data: N/A\n"

        # Enable recursive file searches on Windows
        rfilesearch_element = root.find(".//Policies/persistARFResults")
        if rfilesearch_element is not None:
            rfilesearch = rfilesearch_element.attrib.get('enabled', 'N/A')
            result += f"Enable recursive file searches on Windows: {'enabled' if rfilesearch == '1' else 'disabled'}\n"
        else:
            result += "Enable recursive file searches on Windows: N/A\n"

        # Selected Policies
        epolicies = root.findall(".//Enabled/PolicyBenchmark")
        if epolicies:
            for pepolicies in epolicies:
                epolicies1 = pepolicies.attrib.get('benchmarkID', 'N/A')
                result += f"Selected Policies: {epolicies1}\n"
                epolicies2 = pepolicies.attrib.get('benchmarkVersion', 'N/A')
                result += f"Policy Version: {epolicies2}\n"
        else:
            result += "Selected Policies: N/A\n"
            result += "Policy Version: N/A\n"

    except Exception as e:
        result += f"Error processing Policy Manager section: {str(e)}\n"
    return '\n'.join(output) + result

import xml.etree.ElementTree as ET

def oracle_policy(file_path):
    try:
        if file_path is not None:
            results = []
            tree = ET.parse(file_path)
            root = tree.getroot()

            output = []
            output.append("***************************")
            output.append("*    ORACLE POLICY TAB    *")
            output.append("***************************")
            output.append("")
            output.append("")

            # Accessing properties from XML using XPath
            results.append("Policy File names:")
            oracle_policies = []
            for ooracle in root.findall(".//Plugin/[@name='java/OraclePolicyScanner']/param/[@name='policyFiles']"):
                oracle = ooracle.text
                if oracle is not None:
                    oracle_policies.append(oracle)
                else:
                    oracle_policies.append("No policy files found.")
            results.extend(oracle_policies)
            
            # Convert the results list to a string
            results_str = '\n'.join(results)
            
            # Concatenate the output and results
            return '\n'.join(output) + results_str
        else:
            return "No file path provided for Oracle policy."
    except Exception as e:
        return f"Error processing Oracle policy: {e}"

def lotus(file_path):
    try:
        if file_path is not None:
            results = []
            tree = ET.parse(file_path)
            root = tree.getroot()

            output = []
            output.append("**********************************")
            output.append("*     LOTUS DOMINO POLICY TAB    *")
            output.append("**********************************")
            output.append("")
            output.append("")

            # Accessing properties from XML using XPath
            results.append("Policy File names:")
            lotus_policies = []
            for llotus in root.findall(".//Plugin/[@name='java/NotesPolicyScanner']/param/[@name='policyFiles']"):
                lotus = llotus.text
                if lotus is not None:
                    lotus_policies.append(lotus)
                else:
                    lotus_policies.append("No policy files found.")
            results.extend(lotus_policies)
            
            # Convert the results list to a string
            results_str = '\n'.join(results)
            
            # Concatenate the output and results
            return '\n'.join(output) + results_str
        else:
            return "No file path provided for Lotus Domino policy."
    except Exception as e:
        return f"Error processing Lotus Domino policy: {e}"

def windows_group(file_path):
    try:
        if file_path is not None:
            results = []
            tree = ET.parse(file_path)
            root = tree.getroot()
            results.append("")

            output = []
            output.append("***************************")
            output.append("*    WINDOWS GROUP TAB    *")
            output.append("***************************")
            output.append("") 
            
            for workstations in root.findall(".//Plugin/[@name='java/WindowsPolicyScanner']/param/[@name='wksPolicyFile']"):
                workstation = workstations.text
                if workstation is not None:
                    results.append("Workstation Policy file name: " + workstation)
                else:
                    results.append("Workstation Policy file name: No file name available.")

            for sserver in root.findall(".//Plugin/[@name='java/WindowsPolicyScanner']/param/[@name='srvPolicyFile']"):
                server = sserver.text
                if server is not None:
                    results.append("Server Policy names: " + server)
                else:
                    results.append("Server Policy names: No server policy names found.")

            for ddc in root.findall(".//Plugin/[@name='java/WindowsPolicyScanner']/param/[@name='dcPolicyFile']"):
                dc = ddc.text
                if dc is not None:
                    results.append("Domain Controller File Policy name: " + dc)
                else:
                    results.append("Domain Controller File Policy name: No domain controller policy name found.")
                
            # Convert the results list to a string
            results_str = '\n'.join(results)
            
            # Concatenate the output and results
            return '\n'.join(output) + results_str
        else:
            return "No file path provided for Windows Group policy."
    except Exception as e:
        return f"Error processing Windows Group policy: {e}"

    
def cif_smb_account(file_path):
    try:
        if file_path is not None:
            tree = ET.parse(file_path)
            root = tree.getroot()
            results = []
            results.append("")

            output = []
            output.append("******************************")
            output.append("*     CIF/SMB ACCOUNT TAB    *")
            output.append("******************************")
            output.append("") 

            for ciff in root.findall(".//Plugin/[@name='java/CifsScanner']/param/[@name='acctLockoutThreshold']"):
                cif = ciff.text
                results.append("Account Lockout Threshold: " + (cif if cif is not None else "No account lockout threshold available."))
            
            for mpassw in root.findall(".//Plugin/[@name='java/CifsScanner']/param/[@name='minPasswordLength']"):
                passw = mpassw.text
                results.append("Minimum password length: " + (passw if passw is not None else "No minimum password length available."))
            
            # Convert the results list to a string
            results_str = '\n'.join(results)
            
            # Concatenate the output and results
            return '\n'.join(output) + results_str
        else:
            return "No file path provided for CIF/SMB account policy."
    except Exception as e:
        return f"Error processing CIF/SMB account policy: {e}"


def as_400_policy(file_path):
    try:
        if file_path is not None:
            tree = ET.parse(file_path)
            root = tree.getroot()
            results = []
            results.append("")

            output = []
            output.append("****************************")
            output.append("*    AS/400 POLICY  TAB    *")
            output.append("****************************")
            output.append("") 

            for altt in root.findall(".//Plugin/[@name='java/AS400Scanner']/param/[@name='acctLockoutThreshold']"):
                alt = altt.text
                results.append("Account Lockout Threshold: " + (alt if alt is not None else "No account lockout threshold available."))
            
            for mpassw in root.findall(".//Plugin/[@name='java/AS400Scanner']/param/[@name='minPasswordLength']"):
                passw = mpassw.text
                results.append("Minimum password length: " + (passw if passw is not None else "No minimum password length available."))
            
            for msll in root.findall(".//Plugin/[@name='java/AS400Scanner']/param/[@name='minPasswordLength']"):
                msl = msll.text
                results.append("Minimum security level: " + (msl if msl is not None else "No minimum security level available."))
            
            # Convert the results list to a string
            results_str = '\n'.join(results)
            
            # Concatenate the output and results
            return '\n'.join(output) + results_str
        else:
            return "No file path provided for AS/400 policy."
    except Exception as e:
        return f"Error processing AS/400 policy: {e}"


def unix_policy(file_path):
    try:
        if file_path is not None:
            tree = ET.parse(file_path)
            root = tree.getroot()
            results = []
            results.append("")

            output = []
            output.append("**************************")
            output.append("*     UNIX POLICY TAB    *")
            output.append("**************************")
            output.append("") 

            for umask in root.findall(".//Plugin/[@name='java/UnixScanner']/param/[@name='umask']"):
                mask = umask.text
                results.append("Minimum account umask value: " + (mask if mask is not None else "No minimum account umask value available."))
            
            # Convert the results list to a string
            results_str = '\n'.join(results)
            
            # Concatenate the output and results
            return '\n'.join(output) + results_str        
        else:
            return "No file path provided for Unix policy."
    except Exception as e:
        return f"Error processing Unix policy: {e}"
