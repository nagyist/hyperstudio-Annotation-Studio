require 'spec_helper'

describe Melcatalog do

  before do
    Melcatalog.configure do |config|
      config.service_endpoint = 'http://localhost:3000'
    end
  end

  describe '#search' do

     it 'finds by common term' do
        term = "123"
        results = Melcatalog.search( term, 1000, false )
        fail if results.empty?
     end

     it 'limit result count' do
       max = 10
       results = Melcatalog.search( '*', max, false )
       fail if results.empty?
       fail if results.size > max
     end

  end

  describe '#explicit' do

    it 'get by eid' do
      eid = "123456"
      results = Melcatalog.get( eid )
      fail if results.empty?
      fail if results.size != 1
    end

  end

  describe '#metadata' do

    it 'gets AAT hiararchy' do
       metadata = Melcatalog.aat_hirararchy(  )
       fail if metadata.empty?
       process_peers( metadata )
    end

  end

  describe '#helpers' do

    it 'gets texts metadata' do
      metadata = Melcatalog.texts(  )
      fail if metadata.empty?

      metadata.each { | entity |
        must_exist( entity, :type )
        fail if entity[ :type ] != :text

        must_exist( entity, :title )
        must_exist( entity, :author )
        must_exist( entity, :edition )
        must_exist( entity, :publisher )
        must_exist( entity, :pubdate )
        must_exist( entity, :source )
        must_exist( entity, :rights )
        must_exist( entity, :text )
      }
    end

    it 'gets people metadata' do
      metadata = Melcatalog.people(  )
      fail if metadata.empty?

      metadata.each { | entity |
        must_exist( entity, :type )
        fail if entity[ :type ] != :person
      }
    end

    it 'gets artwork metadata' do
      metadata = Melcatalog.artwork(  )
      fail if metadata.empty?

      metadata.each { | entity |
        must_exist( entity, :type )
        fail if entity[ :type ] != :artwork
      }
    end

  end

  private

  def process_peers( peers )
    peers.each { | entity |
      fail if entity[ :text ].empty?
      process_peers( entity[ :nodes ] ) unless entity[ :nodes ].nil?
      fail if entity[ :eid ].nil? == false && entity[ :eid ].empty?
    }
  end

  def must_exist( obj, sym )
    fail if obj[ sym ].nil?
    fail if obj[ sym ].empty?
  end

end
